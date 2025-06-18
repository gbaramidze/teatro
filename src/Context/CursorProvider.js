import React, { createContext, useEffect, useRef } from 'react'

export const cursor_context = createContext(null)
const CursorProvider = ({ children }) => {
  const ref = useRef(null)
  const galleryRef = useRef(null)
  const checkRef = useRef([])
  useEffect(() => {
    if (galleryRef.current) {
      var ball = ref.current.querySelector(".ball");
      var cursorText = ref.current.querySelector(".cursor-text");


      var hoverAreas = galleryRef.current.querySelectorAll('.hover-area');

      var lastHoveredElement = null;

      function updateCursor(e) {
        var x = e.clientX;
        var y = e.clientY;

        var scrollX = window.scrollX || document.documentElement.scrollLeft;
        var scrollY = window.scrollY || document.documentElement.scrollTop;

        ball.style.left = x + scrollX + "px";
        ball.style.top = y + scrollY + "px";
        cursorText.style.left = x + scrollX + "px";
        cursorText.style.top = y + scrollY + "px";

        if (lastHoveredElement === null) {
          ball.style.display = 'block';
          ball.style.height = "10px";
          ball.style.width = "10px";
          cursorText.style.opacity = '0';
        }
      }

      function handleHoverEnter(e) {
        cursorText.innerHTML = e.target.getAttribute('data-cursor-text');
        cursorText.style.opacity = '1';
        ball.style.height = "50px";
        ball.style.width = "130px";

        lastHoveredElement = e.target;
      }

      function handleHoverLeave(e) {
        cursorText.style.opacity = '0';
        ball.style.display = 'block';

        lastHoveredElement = null;
      }

      document.addEventListener('mousemove', updateCursor);

      hoverAreas.forEach(function (elem) {
        elem.addEventListener('mouseenter', handleHoverEnter);
        elem.addEventListener('mouseleave', handleHoverLeave);
      });
    }
  }, [])
  return (
    <cursor_context.Provider value={{ galleryRef, checkRef }}>
      <div ref={ref} >
        <div className="ball"></div>
        <div className="cursor-text"></div>
      </div>
      {children}
    </cursor_context.Provider>
  )
}

export default CursorProvider