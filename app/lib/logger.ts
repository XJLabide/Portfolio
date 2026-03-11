type LogLevel = "info" | "warn" | "error";

type LogContext = Record<string, unknown>;

export function logEvent(level: LogLevel, event: string, context: LogContext = {}) {
  const payload = {
    level,
    event,
    ...context,
    timestamp: new Date().toISOString(),
  };

  const target = level === "error" ? console.error : level === "warn" ? console.warn : console.info;
  target(JSON.stringify(payload));
}
