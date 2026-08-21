import { AnimatePresence, motion } from 'framer-motion';

import { useVideoPlayer } from '@/lib/video';

import { SceneApplication } from './video_scenes/SceneApplication';
import { SceneClose } from './video_scenes/SceneClose';
import { SceneIdentity } from './video_scenes/SceneIdentity';
import { SceneOpening } from './video_scenes/SceneOpening';
import { SceneStrategy } from './video_scenes/SceneStrategy';
import { LogoMark } from './video_scenes/shared';

const SCENE_DURATIONS = {
  opening: 4200,
  strategy: 4700,
  identity: 4700,
  application: 4300,
  close: 5200,
};

const chapterNames = ['A beginning', 'The point of view', 'The mark', 'The details', 'The feeling'];

function sceneFor(index: number) {
  switch (index) {
    case 1:
      return <SceneStrategy />;
    case 2:
      return <SceneIdentity />;
    case 3:
      return <SceneApplication />;
    case 4:
      return <SceneClose />;
    default:
      return <SceneOpening />;
  }
}

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS, loop: true });
  const sceneProgress = currentScene / 4;

  return (
    <main className="rt-film" aria-label="Raj Travel brand film">
      <div className="rt-film__wash" />
      <motion.div
        className="rt-film__grain"
        animate={{ x: `${sceneProgress * 4}vw`, y: `${Math.sin(currentScene * 1.7) * 2}vh`, rotate: 8 + currentScene * 2 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="rt-film__contour rt-film__contour--one"
        animate={{
          x: `${currentScene * 1.2}vw`,
          y: `${currentScene * -0.7}vh`,
          rotate: 22 + currentScene * 7,
          scale: 1 + currentScene * .04,
        }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="rt-film__contour rt-film__contour--two"
        animate={{
          x: `${currentScene * -1.1}vw`,
          y: `${currentScene * .8}vh`,
          rotate: -32 - currentScene * 5,
          scale: 1 - currentScene * .025,
        }}
        transition={{ duration: 2.7, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="rt-film__anchor">
        <LogoMark className="rt-film__anchor-mark" />
        <div>
          <div className="rt-film__anchor-name">RAJ TRAVEL</div>
          <div className="rt-film__anchor-tag">JOURNEYS, REDEFINED.</div>
        </div>
      </div>
      <div className="rt-film__chapter">
        {String(currentScene + 1).padStart(2, '0')} / 05 · {chapterNames[currentScene]}
      </div>
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={`scene-${currentScene}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .55, ease: 'easeInOut' }}
        >
          {sceneFor(currentScene)}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
