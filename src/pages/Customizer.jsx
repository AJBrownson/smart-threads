import { useState, ueEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'

import cnfig from "../config/config"
import state from "../store"
import { download } from "../assets"

import { downloadCanvasToImage, reader } from "../config/helpers.js"
import { EditorTab, FilterTab, DecalTypes } from "../config/constants"
import { fadeAnimation, slideAnimation } from "../config/motion"

const Customizer = () => {
  return (
    <div>Customizer</div>
  )
}

export default Customizer