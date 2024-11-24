import React from 'react';
import { ScrollingVisualizer } from './ScrollingVisualizer';

interface AudioFeaturesProps {
  spectrumData: number[];
  mfccData: number[];
  pitchData: number[];
  loudnessData: number[];
}

export const AudioFeatures: React.FC<AudioFeaturesProps> = ({
  spectrumData,
  mfccData,
  pitchData,
  loudnessData
}) => {
  return (
    <div className="space-y-2 mt-6">
      {/* 频谱图 - 减小高度 */}
      <div className="h-24">
        <ScrollingVisualizer
          data={spectrumData}
          height={96}
          color="200"
          renderType="spectrum"
          minValue={-100}
          maxValue={0}
        />
      </div>

      {/* MFCC图 - 减小高度 */}
      <div className="h-24">
        <ScrollingVisualizer
          data={mfccData}
          height={96}
          color="0"
          renderType="heatmap"
          minValue={-80}
          maxValue={80}
        />
      </div>

      {/* 音高图 */}
      <div className="h-12">
        <ScrollingVisualizer
          data={pitchData}
          height={48}
          color="#60A5FA"
          renderType="line"
          minValue={20}
          maxValue={2000}
        />
      </div>

      {/* 响度图 */}
      <div className="h-12">
        <ScrollingVisualizer
          data={loudnessData}
          height={48}
          color="#34D399"
          renderType="line"
          minValue={-60}
          maxValue={0}
        />
      </div>
    </div>
  );
}; 