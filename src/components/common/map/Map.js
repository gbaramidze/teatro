import dynamic from 'next/dynamic'
import React from 'react'

const LeafletMap = dynamic(
    () => import('@/components/common/map/LeafletMap'),
    {
        loading: () => <p>A map is loading</p>,
        ssr: false
    }
)
const Map = ({el}) => {
    return (
        <div className={`modal modal-fullscreen routing-map-modal fade`} id="RoutingMapModal" tabIndex="-1" aria-labelledby="RoutingMapLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="RoutingMapLabel">Lech and Maria kachinski 5, Batumi</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div id="RoutingMap">
                            {el && <LeafletMap el={el} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map