import Container from 'components/Container';
import { getCurrentVisitorLocation } from 'lib/location';

export default function Dashboard({ location }) {
  return (
    <Container
      location={location}
      title="Dashboard – Rajat Mehra"
      description="My personal dashboard showcasing analytics and metrics."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is my personal dashboard, built with Next.js API routes
            deployed as serverless functions. Here you can see various metrics
            and analytics about my portfolio.
          </p>
        </div>

        <div className="w-full">
          <h2 className="font-bold text-2xl tracking-tight text-black dark:text-white mb-4">
            Analytics
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Portfolio metrics and visitor analytics.
          </p>

          <div className="grid gap-6 sm:grid-cols-1">
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                GitHub Stats
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Repository statistics and activity
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export const getServerSideProps = getCurrentVisitorLocation;
