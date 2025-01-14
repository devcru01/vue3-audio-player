export interface AudioPlayerOption {
  src: string //audio source
  title?: string //audio title
  coverImage?: string //cover image
  coverRotate?: boolean //cover rotate when playing
  progressBarColor?: string //progress bar color
  indicatorColor?: string //indicator color
}

export const AudioPlayerOptionDefault: AudioPlayerOption = {
  src: '',
  title: '',
  coverImage: '',
  coverRotate: true,
  progressBarColor: '#737373',
  indicatorColor: '#737373',
}
