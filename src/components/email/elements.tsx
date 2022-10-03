import React from 'react';

interface PageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: PageProps): JSX.Element => {
  return <div>{children}</div>;
};

interface LogoProps {
  path: string;
}

export const Logo = ({ path }: LogoProps): JSX.Element => {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={path} width={180} alt="Branch Acupuncture Logo" />
    </div>
  );
};

interface TitleProps {
  children: React.ReactNode;
}

export const Title = ({ children }: TitleProps): JSX.Element => {
  return (
    <div
      style={{
        fontFamily: 'Times New Roman, serif',
        fontSize: '16pt',
        marginTop: '10pt',
      }}
    >
      {children}
    </div>
  );
};

interface TextProps {
  paragraph?: boolean;
  children: React.ReactNode;
}

export const Text = ({
  paragraph = false,
  children,
}: TextProps): JSX.Element => {
  return (
    <div
      style={{
        fontWeight: 400,
        margin: paragraph ? 0 : '10pt 0 0 0',
        fontSize: '12pt',
      }}
    >
      {children}
    </div>
  );
};
