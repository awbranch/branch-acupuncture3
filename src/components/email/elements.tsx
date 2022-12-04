import React from 'react';

interface ElementProps {
  children: React.ReactNode;
}

export const Page = ({ children }: ElementProps): JSX.Element => {
  return (
    <div
      style={{
        margin: '10pt',
        padding: '30pt',
        borderRadius: '5px',
        maxWidth: '500pt',
        border: '1px solid #aaa',
      }}
    >
      {children}
    </div>
  );
};

interface LogoProps {
  path: string;
}

export const Logo = ({ path }: LogoProps): JSX.Element => {
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={path} width={180} alt="Branch Acupuncture Logo" />
    </div>
  );
};

export const Table = ({ children }: ElementProps): JSX.Element => {
  return (
    <table
      style={{
        width: '100%',
      }}
    >
      <tbody>{children}</tbody>
    </table>
  );
};

export const Row = ({ children }: ElementProps): JSX.Element => {
  return <tr>{children}</tr>;
};

export const Cell = ({ children }: ElementProps): JSX.Element => {
  return <td style={{ verticalAlign: 'top' }}>{children}</td>;
};

export const DoubleCell = ({ children }: ElementProps): JSX.Element => {
  return (
    <td colSpan={2} style={{ verticalAlign: 'top' }}>
      {children}
    </td>
  );
};

export const Title = ({ children }: ElementProps): JSX.Element => {
  return (
    <div
      style={{
        fontFamily: 'Georgia, serif',
        fontSize: '15pt',
        marginTop: '20pt',
      }}
    >
      {children}
    </div>
  );
};

export const Header = ({ children }: ElementProps): JSX.Element => {
  return (
    <div
      style={{
        fontFamily: 'Georgia, serif',
        fontSize: '6.5pt',
        fontWeight: 600,
        color: '#555',
        letterSpacing: '.08rem',
        textTransform: 'uppercase',
        margin: '20pt 0 2pt 0',
      }}
    >
      {children}
    </div>
  );
};

export const Text = ({ children }: ElementProps): JSX.Element => {
  return (
    <div
      style={{
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 400,
        margin: 0,
        fontSize: '11pt',
      }}
    >
      {children}
    </div>
  );
};

export const Para = ({ children }: ElementProps): JSX.Element => {
  return (
    <div
      style={{
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 400,
        margin: '10pt 0 0 0',
        fontSize: '11pt',
      }}
    >
      {children}
    </div>
  );
};

export const Subtext = ({ children }: ElementProps): JSX.Element => {
  return (
    <div
      style={{
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 400,
        margin: 0,
        fontSize: '8pt',
      }}
    >
      {children}
    </div>
  );
};
