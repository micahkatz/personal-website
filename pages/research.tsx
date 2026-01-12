import React, { useState } from "react";
import PaperTile from "../components/PaperTile";
import Section from "../components/Section";
import WidePaper from "../components/WidePaper";
import { Button } from "../components/ui/button";
type MonthType =
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec";
type YearType = `${number}`;

type DateType = `${MonthType} ${YearType}` | "Present";

type PaperType = {
  title: string;
  dates?: string;
  description: string[];
  skills?: string[];
  authors?: string[];
  githubLink?: string;
  publishedLink?: string;
  articleLink?: string;
  className?: string;
  imageUri?: string;
  imageColor?: string;
  isFeatured?: boolean;
};
const papers: PaperType[] = [
  {
    title: "Scaling Trends for Multi-Hop Contextual Reasoning in Mid-Scale Language Models",
    description: [
      "We find that multi-agent LLM architectures function as capability amplifiers rather than compensators, yielding statistically significant gains only when base models possess sufficient reasoning capacity, with active parameters proving more predictive of multi-hop performance than total parameter count.",
    ],
    authors: ['Brady Steele', 'Micah Katz'],
    dates: "Jan 2026",
    isFeatured: true,
    articleLink: 'https://arxiv.org/abs/2601.04254',
    githubLink: 'https://github.com/micahkatz/multi-hop-contextual-reasoning'
  },
];

const INITIAL_PAPERS = 6

const ResearchPage = () => {
  const [shouldShowAll, setShouldShowAll] = useState(false);
  return (
    <Section title="Research" className="text-left" id="research">
      {papers
        .filter((prj) => prj?.isFeatured)
        .map((item) => (
          <WidePaper
            key={item.title}
            {...item}
            className="mb-8"
          />
        ))}
      <div className="flex flex-col items-center">
        <div className="grid gap-4 sm:grid-cols-1 md:mt-2 md:grid-cols-2 lg:grid-cols-2">
          {papers
            .filter((prj) => !prj?.isFeatured)
            .slice(0, !shouldShowAll ? INITIAL_PAPERS : undefined)
            .map((item) => (
              <PaperTile {...item} key={item.title} />
            ))}
        </div>
        {papers?.length > INITIAL_PAPERS && <Button
          className="mt-4 w-fit self-center"
          variant="ghost"
          onClick={(e) => {
            e.preventDefault();
            setShouldShowAll((prev) => !prev);
          }}
        >
          {!shouldShowAll ? 'Show all papers' : 'Show less papers'}
        </Button>}
      </div>
    </Section>
  );
};

export default ResearchPage;
