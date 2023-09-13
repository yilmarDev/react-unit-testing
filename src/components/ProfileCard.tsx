import React from 'react';

export function titleCase(param: string) {
  if (param === '') return '';

  const arr = param.split(' ');
  const result: string[] = [];

  for (let element of arr) {
    result.push(element[0].toUpperCase() + element.substring(1).toLowerCase());
  }

  return result.join(' ');
}

type Props = {};

export const ProfileCard = (props: Props) => {
  return <div>ProfileCard</div>;
};
