interface StatCounterProps {
  value: string;
  label: string;
}

export function StatCounter({ value, label }: StatCounterProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-4xl font-bold tracking-tight text-dark-heading">
        {value}
      </span>
      <span className="text-sm font-medium text-muted-body">{label}</span>
    </div>
  );
}
