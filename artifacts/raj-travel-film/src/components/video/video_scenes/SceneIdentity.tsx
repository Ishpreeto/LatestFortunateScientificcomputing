import { motion } from 'framer-motion';

import { Board, LogoMark, SceneShell } from './shared';

export function SceneIdentity() {
  return (
    <SceneShell className="rt-film__scene--identity">
      <motion.div
        className="rt-identity-title"
        initial={{ opacity: 0, x: '-2vw' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '-2vw' }}
        transition={{ duration: .65 }}
      >
        <div className="rt-film__eyebrow">A mark with a story</div>
        <h2 className="rt-film__display">A path<br />worth taking.</h2>
      </motion.div>
      <motion.div
        className="rt-identity-hero rt-board"
        initial={{ opacity: 0, scale: .68, rotate: -13 }}
        animate={{ opacity: 1, scale: 1, rotate: 4 }}
        exit={{ opacity: 0, scale: 1.22, rotate: 12 }}
        transition={{ delay: .18, duration: 1.1, type: 'spring', stiffness: 100, damping: 19 }}
      >
        <img src={import.meta.env.BASE_URL + 'brand/board-logo.jpeg'} alt="Final Raj Travel logo concept" />
        <motion.div
          style={{ position: 'absolute', inset: '9%', border: '1px solid rgba(200,162,77,.55)', pointerEvents: 'none' }}
          animate={{ rotate: [0, 2, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
      <motion.div
        className="rt-identity-strip"
        initial={{ opacity: 0, y: '4vh' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-2vh' }}
        transition={{ delay: .55, duration: .85, ease: [0.16, 1, 0.3, 1] }}
      >
        <Board src="board-exploration.jpeg" alt="Raj Travel logo exploration concepts" />
        <Board src="board-guidelines.jpeg" alt="Raj Travel logo usage guidelines" />
        <Board src="board-logo.jpeg" alt="Raj Travel final logo board" />
      </motion.div>
      <motion.div
        className="rt-identity-caption"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, duration: .5 }}
      >
        <LogoMark className="rt-mark" />
        <p className="rt-film__body">An elegant winding path, enclosed within a refined arch. Exploration, trust, and timeless sophistication in one gesture.</p>
      </motion.div>
    </SceneShell>
  );
}