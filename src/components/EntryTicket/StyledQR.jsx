"use client"
import React, {useEffect} from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {Col} from "react-bootstrap";

const StyledQRCode = ({ value }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
      <Col>
        <QRCodeSVG
            value={value}
            size={isMobile ? 100 : 150}
            fgColor="#FFFFFF"           // Тёмные точки
            bgColor="#000000"           // Белый фон
            level="H"                   // Высокая коррекция ошибок (чтобы логотип влез)
        />
      </Col>
  );
};

export default StyledQRCode;
