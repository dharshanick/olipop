import { Progress } from "@/components/ui/progress";

type LoadingScreenProps = {
  progress: number;
};

const OlipopLogo = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="4"/>
    <path d="M30 70C35 50, 65 50, 70 70" stroke="white" strokeWidth="4" strokeLinecap="round" />
    <path d="M35 40C40 30, 60 30, 65 40" stroke="white" strokeWidth="4" strokeLinecap="round" />
    <circle cx="42" cy="55" r="5" fill="white"/>
    <circle cx="58" cy="55" r="5" fill="white"/>
  </svg>
)

export default function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-4">
        <OlipopLogo />
        <h1 className="text-2xl font-bold tracking-tighter text-primary">Olipop</h1>
      </div>
      <div className="w-1/3 max-w-sm">
        <Progress value={progress} className="h-2 [&>div]:bg-primary" />
        <p className="text-center text-sm text-muted-foreground mt-2">Loading {Math.round(progress)}%</p>
      </div>
    </div>
  );
}
