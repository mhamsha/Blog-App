import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PageNotFoundComp() {
  const navigate = useNavigate();
  return (
    <div className="py-10">
      <div className="text-center">
        <p className="text-base font-semibold text-black dark:text-gray-300">
          404
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-gray-300 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-4 flex items-center justify-center gap-x-3">
          <button
            type="button"
            // onClick={() => console.log(window.history.back())}
            onClick={() => navigate(-1)}
            className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:bg-slate-200 dark:text-black"
          >
            <ArrowLeft size={16} className="mr-2" />
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
