import React, { useEffect, useRef } from 'react';

interface ButtonProps {
  disabled: boolean;
  loading: boolean;
  text: string;
  optionalClassName?: string;
  onClick: () => any;
}

export default function Buttons({ disabled, loading, text, optionalClassName, onClick }: ButtonProps) {

  let btnRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const btn = btnRef.current!

    btn.onmousemove = event => {
      btn.style.backgroundPosition = (`
        ${event.offsetX - btn.clientWidth}px
        ${event.offsetY - btn.clientHeight}px
      `);
    }

  }, [btnRef])

  return (
    <button
      disabled={disabled}
      className={`btn ${loading ? '--is-loading' : ''} ${optionalClassName}`}
      onClick={onClick}
      ref={btnRef}
    >
      {loading ?
        <React.Fragment>
          <span>{'\u22C5'}</span>
          <span>{'\u22C5'}</span>
          <span>{'\u22C5'}</span>
        </React.Fragment> : text
      }
    </button>
  )
}