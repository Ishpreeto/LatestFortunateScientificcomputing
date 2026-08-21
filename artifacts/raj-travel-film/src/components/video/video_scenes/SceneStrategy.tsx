import { motion } from 'framer-motion';

import { Board, Rule, SceneShell } from './shared';

export function SceneStrategy() {
  return (
    <SceneShell className="rt-film__scene--strategy">
      <motion.div
        className="rt-strategy-copy"
        initial={{ opacity: 0, y: '3vh' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: '-3vw', scale: .96 }}
        transition={{ duration: .8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="rt-film__eyebrow">The point of view</div>
        <h2 className="rt-film__display">Travel,<br />with purpose.</h2>
        <p className="rt-film__body">Luxury is a feeling: trusted, personal, unhurried. Raj Travel makes space for the details that stay with you.</p>
      </motion.div>
      <motion.div
        className="rt-strategy-grid"
        initial={{ opacity: 0, scale: .78, rotate: 5, x: '5vw' }}
        animate={{ opacity: 1, scale: 1, rotate: -2, x: 0 }}
        exit={{ opacity: 0, scale: 1.16, x: '-4vw' }}
        transition={{ delay: .2, duration: 1.25, type: 'spring', stiffness: 95, damping: 20 }}
      >
        <Board src="board-strategy.jpeg" alt="Raj Travel brand strategy board" />
        <Board src="board-palette.jpeg" alt="Raj Travel color palette board" />
        <Board src="board-guidelines.jpeg" alt="Raj Travel brand guidelines board" />
      </motion.div>
      <motion.div
        className="rt-strategy-note"
        initial={{ opacity: 0, x: '2vw' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '3vw' }}
        transition={{ delay: .95, duration: .5 }}
      >
        <Rule />
        <span>Luxury · Trust · Exploration</span>
      </motion.div>
    </SceneShell>
  );
}