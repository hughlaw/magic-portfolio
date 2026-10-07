'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Column } from '@/once-ui/components';
import { useRef } from 'react';

export default function GSAPContent() {
  const container = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP);

  const { contextSafe } = useGSAP(
    () => {
      // Your GSAP animations here
      // gsap.to('.box', { stagger: 0.1, x: 360, duration: 0.2 });
    },
    { scope: container }
  );

  const onClickBox = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    const tl = gsap.timeline({ paused: true });
    tl.to(e.target, { x: 360, yoyo: true });
    tl.resume();
  });

  return (
    <Column fillWidth flex={1} gap="64">
      <p>
        This experiment explores the capabilities of GSAP (GreenSock Animation
        Platform) for creating smooth, performant animations in React
        applications.
      </p>

      <div ref={container} className="flex flex-col gap-1">
        <div
          onClick={onClickBox}
          className="box bg-green-500 rounded-2xl w-20 h-20"
        ></div>
        <div
          onClick={onClickBox}
          className="box bg-green-500 rounded-2xl w-20 h-20"
        ></div>
        <div
          onClick={onClickBox}
          className="box bg-green-500 rounded-2xl w-20 h-20"
        ></div>
        <div
          onClick={onClickBox}
          className="box bg-green-500 rounded-2xl w-20 h-20"
        ></div>
      </div>
    </Column>
  );
}
