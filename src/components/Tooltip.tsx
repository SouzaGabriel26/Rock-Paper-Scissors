type TooltipProps = {
  children: JSX.Element;
  content: string;
};

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <div className="group relative">
      {children}

      <div className="absolute -bottom-6 left-0 right-0 hidden animate-show-content-down items-center justify-center rounded-lg bg-slate-600 px-2 py-1 text-white group-hover:flex group-has-[:checked]:flex">
        <span className="text-xs font-bold">{content}</span>
      </div>
    </div>
  );
}
