import React, { useState, useEffect } from "react";
import styles from "./WhatsAppButton.module.css";

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();

      if (day === 0) {
        setIsOnline(false);
      } else if (day === 6) {
        setIsOnline(hour >= 9 && hour < 13);
      } else {
        setIsOnline(hour >= 9 && hour < 18);
      }
    };

    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    const bodyClass = "wa-expanded";
    if (isExpanded && !isMinimized) {
      document.body.classList.add(bodyClass);
    } else {
      document.body.classList.remove(bodyClass);
    }

    return () => {
      document.body.classList.remove(bodyClass);
    };
  }, [isExpanded, isMinimized]);

  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_PHONE ||
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    "56993239203";

  const buildWhatsAppUrl = (message) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const quickActions = [
    {
      id: "quote",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      label: "Solicitar Cotización",
      message: "Hola! Me gustaría solicitar una cotización para...",
      color: "#eab308",
    },
    {
      id: "support",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      label: "Soporte Técnico",
      message: "Hola! Necesito ayuda con...",
      color: "#3b82f6",
    },
    {
      id: "general",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
      label: "Consulta General",
      message: "Hola! Tengo una consulta sobre...",
      color: "#8b5cf6",
    },
  ];

  const handleQuickAction = (message) => {
    const url = buildWhatsAppUrl(message);
    window.open(url, "_blank", "noopener noreferrer");
    setIsExpanded(false);
  };

  const handleMainClick = () => {
    if (!isExpanded) {
      const url = buildWhatsAppUrl(
        "Hola! Quiero más información sobre sus servicios.",
      );
      window.open(url, "_blank", "noopener noreferrer");
    }
  };

  if (isMinimized) return null;

  return (
    <div
      className={`${styles.whatsappWidget} ${
        isExpanded ? styles.expanded : ""
      }`}
    >
      {isExpanded && (
        <div className={styles.whatsappMenu}>
          <div className={styles.whatsappMenuHeader}>
            <div className={styles.headerContent}>
              <div className={styles.avatarContainer}>
                <div className={styles.avatar}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                </div>
                <span
                  className={`${styles.statusIndicator} ${
                    isOnline ? styles.online : styles.offline
                  }`}
                ></span>
              </div>
              <div className={styles.headerText}>
                <h4>Elephant Group</h4>
                <p className={styles.statusText}>
                  {isOnline ? (
                    <>
                      <span className={styles.pulseDot}></span>
                      En línea • Responde rápido
                    </>
                  ) : (
                    "Fuera de horario • Te responderemos pronto"
                  )}
                </p>
              </div>
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => setIsExpanded(false)}
              aria-label="Cerrar menú"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className={styles.whatsappMenuBody}>
            <p className={styles.welcomeText}>¿En qué podemos ayudarte hoy?</p>
            <div className={styles.quickActions}>
              {quickActions.map((action) => (
                <button
                  key={action.id}
                  className={styles.quickActionBtn}
                  onClick={() => handleQuickAction(action.message)}
                  style={{ "--action-color": action.color }}
                >
                  <span className={styles.actionIcon}>{action.icon}</span>
                  <span className={styles.actionLabel}>{action.label}</span>
                  <svg
                    className={styles.actionArrow}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6 3l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ))}
            </div>
            <div className={styles.chatPreview}>
              <div className={styles.chatBubble}>
                <p>¡Hola!👋, somos Elephant Group,</p>
                <p>¿Cómo podemos ayudarte?</p>
                <span className={styles.chatTime}>Ahora</span>
              </div>
            </div>
          </div>

          <div className={styles.whatsappMenuFooter}>
            <button
              className={styles.minimizeBtn}
              onClick={() => setIsMinimized(true)}
            >
              Cerrar temporalmente
            </button>
          </div>
        </div>
      )}

      <button
        className={`${styles.whatsappMainBtn} ${
          isExpanded ? styles.active : ""
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
        onContextMenu={(e) => {
          e.preventDefault();
          handleMainClick();
        }}
        aria-label="Abrir chat de WhatsApp"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={styles.whatsappIcon}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
        {!isExpanded && (
          <>
            <span className={styles.notificationBadge}>1</span>
            <span className={styles.pulseRing}></span>
          </>
        )}
      </button>

      {!isExpanded && (
        <div className={styles.whatsappTooltip}>
          <p>¿Necesitas ayuda?</p>
          <span>Haz clic para chatear</span>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
