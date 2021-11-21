import React from 'react';

type Props = {
  href: string;
  className?: string;
}

export const Icon: React.FC<Props> = ({ href, className }) => {
  return (
    <svg className={className}>
      <use xlinkHref={href} />
    </svg>
  );
};
