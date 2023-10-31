import React from 'react';

type Props = {
  href: string;
  className?: string;
}

export const Icon: React.FC<Props> = ({ href, className }) => {
  return (
    <svg style={{ width: 450, height: 450 }} className={className}>
      <use xlinkHref={href} />
    </svg>
  );
};
