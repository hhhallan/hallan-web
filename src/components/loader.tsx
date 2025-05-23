export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-blue-500 animate-spin"></div>
        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-4 border-b-4 border-blue-200 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
      </div>
    </div>
  );
}