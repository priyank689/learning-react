import React from "react";
import "./BubbleMenu.css";

export default function BubbleMenu({
  logo,
  items,
  menuAriaLabel,
  menuBg,
  menuContentColor,
  useFixedPosition,
  animationEase,
  animationDuration,
  staggerDelay,
}) {
  return (
    <nav
      className={`bubble-menu ${useFixedPosition ? "fixed" : "absolute"}`}
      aria-label={menuAriaLabel}
    >
      {/* Logo */}
      <div className="bubble logo-bubble" style={{ background: menuBg }}>
        <div className="logo-content" style={{ color: menuContentColor }}>
          {logo}
        </div>
      </div>

      {/* Items */}
      <div className="bubble-menu-items">
        <ul className="pill-list">
          {items.map((item) => (
            <li key={item.label} className="pill-col">
              <a
                href={item.href}
                aria-label={item.ariaLabel}
                className="pill-link"
                style={{
                  "--hover-bg": item.hoverStyles.bgColor,
                  "--hover-color": item.hoverStyles.textColor,
                  "--item-rot": `${item.rotation}deg`,
                }}
              >
                <span className="pill-label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
