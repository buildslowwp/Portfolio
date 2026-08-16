'use client';

import { githubConfig } from '@/config/Github';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import type { Activity } from 'react-activity-calendar';
import { GitHubCalendar } from 'react-github-calendar';

import Container from '../common/Container';
import GithubIcon from '../svgs/Github';
import { Button } from '../ui/button';

export default function Github() {
  const [totalContributions, setTotalContributions] = useState(0);
  const totalSet = useRef(false);
  const { theme } = useTheme();

  // Capture total from the fetched data without triggering setState during render
  const transformData = useCallback((data: Activity[]) => {
    if (!totalSet.current) {
      const total = data.reduce((sum, d) => sum + d.count, 0);
      totalSet.current = true;
      setTimeout(() => setTotalContributions(total), 0);
    }
    return data;
  }, []);

  return (
    <Container className="mt-28">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-foreground text-2xl font-bold">
              {githubConfig.title}
            </h2>
            <p className="text-muted-foreground text-sm">
              <b>{githubConfig.username}</b>&apos;s {githubConfig.subtitle}
            </p>
            {totalContributions > 0 && (
              <p className="text-primary mt-1 text-sm font-medium">
                Total:{' '}
                <span className="font-black">
                  {totalContributions.toLocaleString()}
                </span>{' '}
                contributions
              </p>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="relative overflow-hidden">
          <div className="bg-background/50 relative rounded-lg border border-dashed border-black/20 p-6 backdrop-blur-sm dark:border-white/10">
            <div className="w-full overflow-x-auto">
              <GitHubCalendar
                username={githubConfig.username}
                blockSize={12}
                blockMargin={4}
                fontSize={githubConfig.fontSize}
                colorScheme={theme === 'dark' ? 'dark' : 'light'}
                maxLevel={githubConfig.maxLevel}
                hideTotalCount={true}
                hideColorLegend={false}
                hideMonthLabels={false}
                theme={githubConfig.theme}
                labels={{
                  months: githubConfig.months,
                  weekdays: githubConfig.weekdays,
                  totalCount: githubConfig.totalCountLabel,
                }}
                style={{
                  color: 'rgb(139, 148, 158)',
                }}
                transformData={transformData}
                renderLoading={() => (
                  <div className="flex items-center justify-center py-16">
                    <div className="text-center">
                      <div className="border-primary mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-t-transparent"></div>
                      <p className="text-muted-foreground text-sm">
                        {githubConfig.loadingState.description}
                      </p>
                    </div>
                  </div>
                )}
                renderError={() => (
                  <div className="text-muted-foreground border-border rounded-xl border-2 border-dashed p-8 text-center">
                    <div className="bg-muted mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                      <GithubIcon className="h-8 w-8" />
                    </div>
                    <p className="mb-2 font-medium">
                      {githubConfig.errorState.title}
                    </p>
                    <p className="mb-4 text-sm">
                      {githubConfig.errorState.description}
                    </p>
                    <Button variant="outline" asChild>
                      <Link
                        href={`https://github.com/${githubConfig.username}`}
                        className="inline-flex items-center gap-2"
                      >
                        <GithubIcon className="h-4 w-4" />
                        {githubConfig.errorState.buttonText}
                      </Link>
                    </Button>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
