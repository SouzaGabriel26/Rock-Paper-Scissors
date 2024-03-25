export function Spinner() {
  return (
    <div className="absolute bottom-1/2 right-1/2  translate-x-1/2 translate-y-28 transform ">
      <div
        className="h-20
          w-20
          animate-spin
          rounded-full
          border-8
          border-solid
          border-blue-400
          border-t-transparent"
      ></div>
    </div>
  );
}
