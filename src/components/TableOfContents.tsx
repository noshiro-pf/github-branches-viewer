import { memo, useCallback, useEffect, useState } from 'react';
import {
  TableOfContentsNav,
  TocHeader,
  TocList,
  TocItem,
  TocLink,
  TocIcon,
  TocLabel,
} from './TableOfContents.styles';

type TOCItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const TableOfContents = memo(() => {
  const [activeSection, setActiveSection] = useState<string>('');

  const tocItems: TOCItem[] = [
    {
      id: 'github-branches',
      label: 'Branches',
      icon: (
        <svg fill={"currentColor"} height={"16"} viewBox={"0 0 16 16"} width={"16"}>
          <path d={"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.25 2.25 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75H8.5V4.372a2.25 2.25 0 100 0v2.128H6.25a.75.75 0 01-.75-.75V5.372A2.25 2.25 0 005 3.25z"} />
        </svg>
      ),
    },
    {
      id: 'readme',
      label: 'README',
      icon: (
        <svg fill={"currentColor"} height={"16"} viewBox={"0 0 16 16"} width={"16"}>
          <path d={"M4 1.75C4 .784 4.784 0 5.75 0h5.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0114.25 16h-8.5A1.75 1.75 0 014 14.25V1.75zm1.75-.25a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V4.664a.25.25 0 00-.073-.177l-2.914-2.914a.25.25 0 00-.177-.073H5.75z"} />
          <path d={"M6.75 5.25a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5zm0 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm0 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z"} />
        </svg>
      ),
    },
  ];

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element !== null) {
      const headerOffset = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section !== null && section !== undefined && section.offsetTop <= scrollPosition) {
          const tocItem = tocItems[i];
          if (tocItem) {
            setActiveSection(tocItem.id);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section

    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  return (
    <TableOfContentsNav>
      <TocHeader>
        <svg fill={"currentColor"} height={"16"} viewBox={"0 0 16 16"} width={"16"}>
          <path d={"M2 4a1 1 0 100-2 1 1 0 000 2zm3.75-1.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM2 9a1 1 0 100-2 1 1 0 000 2zm0 5a1 1 0 100-2 1 1 0 000 2z"} />
        </svg>
        <span>{"Contents"}</span>
      </TocHeader>

      <TocList>
        {tocItems.map((item) => (
          <TocItem key={item.id}>
            <TocLink
              $active={activeSection === item.id}
              onClick={() => { scrollToSection(item.id); }}
              title={`Go to ${item.label}`}
              type={"button"}
            >
              <TocIcon>{item.icon}</TocIcon>
              <TocLabel>{item.label}</TocLabel>
            </TocLink>
          </TocItem>
        ))}
      </TocList>
    </TableOfContentsNav>
  );
});

TableOfContents.displayName = 'TableOfContents';

export default TableOfContents;
