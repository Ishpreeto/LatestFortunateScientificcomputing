import { motion } from 'framer-motion';

import { LogoMark, Rule, SceneShell } from './shared';

export function SceneClose() {
  return (
    <SceneShell className="rt-film__scene--close">
      <motion.div
        className="rt-close-center"
        initial={{ opacity: 0, scale: .84 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.16 }}
        transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, y: '-1vh' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .28, duration: .7 }}
        >
          <LogoMark className="rt-mark" />
        </motion.div>
        <motion.h2 className="rt-film__display" initial={{ opacity: 0, y: '2vh' }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5, duration: .8 }}>
          Raj Travel
        </motion.h2>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: .82, duration: .7 }}>
          <Rule />
        </motion.div>
        <motion.p initial={{ opacity: 0, letterSpacing: '.1em' }} animate={{ opacity: 1, letterSpacing: '.42em' }} transition={{ delay: 1, duration: .75 }}>
          Journeys, redefined.
        </motion.p>
      </motion.div>
      <motion.div
        className="rt-close-foot"
        initial={{ opacity: 0, y: '2vh' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-2vh' }}
        transition={{ delay: 1.15, duration: .55 }}
      >
        <span>Mumbai · Worldwide</span>
        <span>For the beautifully curious</span>
      </motion.div>
    </SceneShell>
  );
}