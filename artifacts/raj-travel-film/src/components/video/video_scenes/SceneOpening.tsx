import { motion } from 'framer-motion';

import { Board, LogoMark, Rule, SceneShell } from './shared';

export function SceneOpening() {
  return (
    <SceneShell className="rt-film__scene--opening">
      <motion.div
        className="rt-scanline"
        initial={{ opacity: 0, x: '-20vw' }}
        animate={{ opacity: 1, x: '110vw' }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3.8, ease: 'easeInOut' }}
      />
      <Board
        src="board-title.jpeg"
        alt="Raj Travel brand identity case study cover"
        className="rt-opening-board"
      />
      <motion.div
        className="rt-opening-copy"
        initial={{ opacity: 0, x: '-3vw', clipPath: 'inset(0 100% 0 0)' }}
        animate={{ opacity: 1, x: 0, clipPath: 'inset(0 0% 0 0)' }}
        exit={{ opacity: 0, scale: 1.08, x: '3vw' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="rt-film__eyebrow">A brand film · 01</div>
        <h1 className="rt-film__display">Raj Travel</h1>
        <p>Journeys, redefined.</p>
        <motion.div
          initial={{ scaleX: 0, transformOrigin: 'left' }}
          animate={{ scaleX: 1 }}
          transition={{ delay: .7, duration: .8, ease: 'easeOut' }}
          style={{ width: '14vw', marginTop: '4vh', height: 1, background: 'var(--color-primary)' }}
        />
      </motion.div>
      <motion.div
        className="rt-opening-logo rt-pulse"
        initial={{ opacity: 0, scale: .7, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 1.4, rotate: 10 }}
        transition={{ delay: .3, duration: 1, type: 'spring', stiffness: 120, damping: 18 }}
      >
        <LogoMark className="rt-mark" />
      </motion.div>
      <motion.div
        className="rt-opening-side"
        initial={{ opacity: 0, y: '2vh' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-2vh' }}
        transition={{ delay: 1.1, duration: .65 }}
      >
        <Rule />
        <p className="rt-film__body">A visual identity built for the beautifully curious.</p>
      </motion.div>
    </SceneShell>
  );
}