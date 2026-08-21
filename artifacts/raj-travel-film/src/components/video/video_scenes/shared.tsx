import { type CSSProperties, type ReactNode } from 'react';

export const brandAsset = (filename: string) => `${import.meta.env.BASE_URL}brand/${filename}`;

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 132" aria-hidden="true">
      <path d="M17 116V48C17 23 33 9 50 9s33 14 33 39v68" fill="none" stroke="currentColor" strokeWidth="2.3" />
      <path d="M50 47c24 2 34 8 28 18-6 11-31 12-35 23-4 11 18 12 18 23 0 9-14 16-28 21" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M50 17l3.8 9 8.5 2.5-8.5 2.6-3.8 9-3.8-9-8.5-2.6 8.5-2.5z" fill="currentColor" />
      <path d="M17 116l16-10M83 116l-16-10" stroke="currentColor" strokeWidth="2.3" />
    </svg>
  );
}

export function Rule() {
  return <div className="rt-rule"><i>✦</i></div>;
}

export function Board({
  src,
  className = '',
  style,
  alt,
}: {
  src: string;
  className?: string;
  style?: CSSProperties;
  alt: string;
}) {
  return (
    <div className={`rt-board ${className}`} style={style}>
      <img src={brandAsset(src)} alt={alt} />
    </div>
  );
}

export function SceneShell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rt-film__scene ${className}`}>{children}</div>;
}