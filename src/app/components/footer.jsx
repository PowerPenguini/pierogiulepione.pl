import { IconBrandGithub } from "@tabler/icons-react";

export function Footer() {
  return (
    <div className="flex justify-center items-center gap-2 mt-8 py-4 border-neutral-700 border-t text-neutral-500 text-sm text-center 2">
      <span>Witryna stworzona przez</span>
      <a
        href="https://github.com/PowerPenguini" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:text-neutral-300 transition-colors"
      >PowerPenguini
        <IconBrandGithub size={16} />
      </a>
    </div>
  );
}
