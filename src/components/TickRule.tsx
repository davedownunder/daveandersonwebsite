export default function TickRule({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`tick-rule ${className}`} />;
}
