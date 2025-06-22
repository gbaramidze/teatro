import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  ListGroup,
  Modal,
  Row,
  Toast,
  ToastContainer,
  ToggleButton
} from 'react-bootstrap';
import {TransformComponent, TransformWrapper, useControls} from "react-zoom-pan-pinch";
import useSWR from "swr";
import TicketIcon from "@/components/common/icons/TicketIcon";
import {useCheckout} from "@/app/[locale]/event/[id]/hooks/useCheckout";
import {useTranslations} from 'next-intl';

const floors = [
  {id: 1, name: 'Hall'},
  {id: 2, name: 'Parterre Royal'}
];

const svgBackgrounds = {
  1: '/plan/floor1.png',
  2: '/plan/floor2.png',
};

const Controls = () => {
  const {zoomIn, zoomOut, resetTransform} = useControls();

  return (
    <div className="tools">
      <button onClick={() => zoomIn()}>+</button>
      <button onClick={() => zoomOut()}>-</button>
      <button onClick={() => resetTransform()}>x</button>
    </div>
  );
};

export default function HallModalEasyPanzoom({show, onHide, eventId, isMobile, onHandleSubmit}) {
  const t = useTranslations('hall');
  const [selectedFloor, setSelectedFloor] = useState(1);
  const [selectedTable, setSelectedTable] = useState(null);
  const panzoomRef = useRef(null);
  const [message, setMessage] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [modal, checkout] = useCheckout(isMobile);

  const {data} = useSWR(`/api/tables/${eventId}`, (url) => fetch(url).then(res => res.json()));
  const event = data?.data || {};
  const tables = event?.seatingOverrides || []

  const handleZoom = (factor) => {
    const instance = panzoomRef.current;
    if (instance) {
      instance.zoomToCenter(factor);
    }
  };

  const currentTables = tables?.filter(f => f.floor === selectedFloor && f.seatCount > 0) || [];

  const colors = {
    available: 'rgba(10,162,10,0.95)',
    busy: 'rgba(217,56,56,0.95)',
    selected: 'rgba(128,140,141,0.95)',
  }

  const totalPrice = selectedTable?.seatCount * event.activePrice + selectedTable?.price;

  useEffect(() => {
    if (show) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [show])

  const SeatPreview = ({table, floor}) => {
    return (
      <div style={{
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <div
          style={{
            width: table.width,
            height: table.height,
            border: '2px solid #ccc',
            backgroundImage: `url(${svgBackgrounds[floor]})`,
            backgroundSize: '1200px 1500px',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden',
            backgroundPosition: `-${table.x}px -${table.y}px`,
            position: 'relative',
            marginTop: 10,
            transform: 'scale(1)'
          }}
        />
      </div>
    );
  };

  return (
    <Modal show={show} onHide={onHide} size="xl" centered fullscreen>
      <Modal.Header closeButton>
        <Modal.Title>{t('table_booking')}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{padding: 0, overflow: !isMobile ? 'hidden' : 'auto'}}>
        {tables ? (
          <Row style={{margin: 0}}>
            {(!isMobile || !selectedTable) && (
              <Col md={selectedTable ? 8 : 12} className="border mb-md-3 mb-md-0" style={{
                overflow: 'hidden',
                height: isMobile ? 'calc(100vh - 63px)' : 'calc(100vh - 66px)',
                position: 'relative'
              }}>
                <TransformWrapper
                  initialScale={isMobile ? 0.3 : 0.7}
                  minScale={0.3}
                  maxScale={2}
                  centerOnInit
                  wheel={{step: 50}}
                >
                  {({zoomIn, zoomOut, resetTransform, ...rest}) => (
                    <>
                      <div style={{
                        position: 'absolute',
                        bottom: 10,
                        right: 10,
                        zIndex: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5,
                        background: '#ccc',
                        borderRadius: 12,
                        padding: 6
                      }}>
                        <Button variant="light" size="sm" onClick={() => zoomIn()}>+</Button>
                        <Button variant="light" size="sm" onClick={() => zoomOut()}>–</Button>
                      </div>

                      <div style={{
                        position: 'absolute',
                        top: 10,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 10,
                        background: 'rgba(35,26,26,0.85)',
                        borderRadius: 5,
                        width: 223
                      }}>
                        <ButtonGroup size='sm'>
                          {floors.map((f) => (
                            <ToggleButton
                              key={f.id}
                              type="radio"
                              name="floor"
                              value={f.id}
                              variant={"outline-primary"}
                              checked={selectedFloor === f.id}
                              onChange={() => {
                                setSelectedFloor(f.id);
                                setSelectedTable(null);
                                setMessage(false);
                              }}
                              id={f.id}>
                              {f.name}
                            </ToggleButton>
                          ))}
                        </ButtonGroup>
                      </div>

                      <TransformComponent wrapperStyle={{width: '100%', height: '100%'}}>
                        <div style={{
                          position: 'relative',
                          width: 1200,
                          height: 1500,
                          backgroundImage: `url(${svgBackgrounds[selectedFloor]})`,
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                        }}>
                          {currentTables.map((table) => (
                            <div
                              key={table.id}
                              onClick={() => !table.sold && table.available ? setSelectedTable(table) : setMessage(true)}
                              style={{
                                position: 'absolute',
                                left: table.x + 2,
                                top: table.y + 2,
                                width: table.width - 5,
                                height: table.height - 5,
                                color: 'white',
                                borderRadius: 5,
                                textAlign: 'center',
                                lineHeight: `${table.height}px`,
                                fontSize: 14,
                                backgroundColor: !table.sold && table.available
                                  ? selectedTable?._id === table._id
                                    ? colors.selected
                                    : colors.available
                                  : colors.busy,
                                cursor: 'pointer',
                                userSelect: 'none',
                              }}
                            >
                              {table.label}
                            </div>
                          ))}
                        </div>
                      </TransformComponent>
                    </>
                  )}
                </TransformWrapper>
              </Col>
            )}

            {selectedTable && (
              <Col md={4}>
                <div className="rounded">
                  <Card style={{width: '100%'}}>
                    <Card.Body>
                      <SeatPreview table={selectedTable} floor={selectedFloor}/>
                      <Card.Text style={{fontSize: 15}} className={'mt-2'}>
                        {t('table_deposit_description')}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">{selectedTable?.label}</div>
                          {t('seat')}
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">{selectedTable?.floor}</div>
                          {t('floor')}
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">{selectedTable?.price} ₾</div>
                          {t('deposit')}
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">{selectedTable?.seatCount}</div>
                          {t('tickets_included')} <TicketIcon/>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">{totalPrice} ₾</div>
                          {t('total_price')}
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                    {
                      isMobile && (
                        <Card.Body>
                          <Button
                            variant="outline-light"
                            className="mt-2"
                            onClick={() => setSelectedTable(null)}
                          >
                            {t('select_another_table')}
                          </Button>
                        </Card.Body>
                      )
                    }
                  </Card>

                  {
                    selectedTable && (
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'sticky',
                        bottom: 0,
                        backgroundColor: '#04000a'
                      }}>
                        <div style={{
                          display: 'flex',
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          justifyContent: 'center',
                          gap: 6
                        }} className={"mt-3"}>
                          {t('terms_info')} <Button variant="link" onClick={() => setAgreement(true)}
                                                    style={{margin: 0, padding: 0}}>{t('terms_and_conditions')}</Button>
                        </div>
                        <Button
                          variant="primary"
                          disabled={!selectedTable}
                          onClick={() => onHandleSubmit(selectedTable)}
                          className={"mt-3 mb-4 btn-gradient"}
                          style={{width: isMobile ? '100%' : 'auto'}}>
                          {selectedTable && (`${totalPrice} ₾`)} {t('buy_now')}

                        </Button>
                      </div>
                    )
                  }
                </div>
              </Col>)}

          </Row>
        ) : (
          <div className="text-center">
            <p>{t('loading')}</p>
          </div>
        )}
      </Modal.Body>

      <ToastContainer position={'top-center'} style={{zIndex: 9999}}>
        <Toast onClose={() => setMessage(false)} show={message} delay={3000} autohide>
          <Toast.Header>
            {t('sorry')}
          </Toast.Header>
          <Toast.Body>{t('table_not_available')}</Toast.Body>
        </Toast>
      </ToastContainer>

      <Modal show={agreement} onHide={() => setAgreement(false)} dialogClassName={"modal-dialog-centered"}>
        <Modal.Header closeButton>
          <Modal.Title>
            {t('terms_and_conditions')}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>{t('term_1')}</li>
            <li>{t('term_2')}</li>
            <li>{t('term_3')}</li>
            <li>{t('term_4')}</li>
            <li>{t('term_5')}</li>
            <li>{t('term_6')}</li>
          </ul>
        </Modal.Body>
      </Modal>
    </Modal>
  );
}