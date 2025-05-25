import { cn } from '@/lib/utils';
import React from 'react';

const MaxWidth = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('max-w-[1440px] mx-auto', className)}>{children}</div>
  );
};

export default MaxWidth;
