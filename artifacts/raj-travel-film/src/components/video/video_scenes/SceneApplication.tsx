import { motion } from 'framer-motion';

import { SceneShell } from './shared';

const asset = (name: string) => `${import.meta.env.BASE_URL}brand/${name}`;

export function SceneApplication() {
  return (
    <SceneShell className="rt-film__scene--application">
      <motion.div
        className="rt-application-copy"
        initial={{ opacity: 0, x: '-3vw' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '-2vw' }}
        transition={{ duration: .75, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="rt-film__eyebrow">From identity to experience</div>
        <h2 className="rt-film__display">The details<br />do the talking.</h2>
        <p className="rt-film__body">A considered system across every touchpoint — from the first hello to the journey home.</p>
      </motion.div>
      <div className="rt-application-stage">
        <motion.div
          className="rt-application-card rt-application-card--back"
          initial={{ opacity: 0, y: '-4vh', rotate: -3 }}
          animate={{ opacity: .57, y: 0, rotate: 7 }}
          exit={{ opacity: 0, x: '5vw', rotate: 14 }}
          transition={{ delay: .12, duration: .8 }}
        >
          <img src={asset('board-applications.jpeg')} alt="Raj Travel brand applications" />
        </motion.div>
        <motion.div
          className="rt-application-card rt-application-card--middle"
          initial={{ opacity: 0, x: '4vw', rotate: 0 }}
          animate={{ opacity: .75, x: 0, rotate: -6 }}
          exit={{ opacity: 0, x: '-4vw', rotate: -12 }}
          transition={{ delay: .35, duration: .9, type: 'spring', stiffness: 110, damping: 18 }}
        >
          <img src={asset('board-strategy.jpeg')} alt="Raj Travel brand strategy details" />
        </motion.div>
        <motion.div
          className="rt-application-card rt-application-card--front"
          initial={{ opacity: 0, y: '5vh', scale: .82, rotate: 8 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 2 }}
          exit={{ opacity: 0, scale: 1.1, x: '-2vw' }}
          transition={{ delay: .58, duration: 1, type: 'spring', stiffness: 92, damping: 17 }}
        >
          <img src={asset('board-applications.jpeg')} alt="Raj Travel stationery and website application board" />
        </motion.div>
      </div>
      <motion.div
        className="rt-application-number"
        initial={{ opacity: 0, scale: .6 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.25 }}
        transition={{ delay: .9, duration: .5 }}
      >
        04
      </motion.div>
    </SceneShell>
  );
}