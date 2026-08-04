import type { Meta, StoryObj } from '@storybook/preact';
import { useState } from 'preact/hooks';
import { Field } from './Field';
import { SegmentedControl } from '../SegmentedControl';
import { Stepper } from '../Stepper';
import { Text } from '../Text';

const meta: Meta<typeof Field> = {
  title: 'Components/Field',
  component: Field,
};

export default meta;
type Story = StoryObj<typeof Field>;

export const WithControl: Story = {
  render: () => (
    <Field
      label="sound"
      caption="tones follow the ring so you can close your eyes"
      control={
        <SegmentedControl
          value="tones"
          onChange={() => {}}
          options={[
            { label: 'tones', value: 'tones' },
            { label: 'silent', value: 'silent' },
          ]}
        />
      }
    />
  ),
};

export const CaptionBelow: Story = {
  render: () => (
    <Field
      label="goal"
      caption="the pace eases as far as you can keep following it"
      captionPlacement="below"
      control={
        <SegmentedControl
          value="slowest"
          onChange={() => {}}
          options={[
            { label: 'slow as possible', value: 'slowest' },
            { label: 'raise hrv', value: 'hrv' },
          ]}
        />
      }
    />
  ),
};

export const FullWidthControl: Story = {
  render: () => (
    <Field
      label={<Text variant="overline">mode</Text>}
      caption="sereniFi searches for a better pace as you breathe, guided by your goal."
      captionPlacement="below"
    >
      <SegmentedControl
        value="adaptive"
        onChange={() => {}}
        options={[
          { label: 'adaptive', value: 'adaptive' },
          { label: 'your own pace', value: 'free' },
        ]}
      />
    </Field>
  ),
};

export const TrailingAnnotation: Story = {
  render: () => (
    <Field
      label="ratio"
      control={
        <Text variant="caption" tone="faint">
          inhale · exhale
        </Text>
      }
    >
      <div style={{ display: 'flex', height: 18, borderRadius: 3, overflow: 'hidden' }}>
        <div style={{ width: '40%', background: 'var(--fi-accent-line)' }} />
        <div style={{ width: '60%', background: 'var(--fi-accent-tint)' }} />
      </div>
    </Field>
  ),
};

function SettingsDemo() {
  const [pace, setPace] = useState(6);
  const [sound, setSound] = useState('tones');
  return (
    <div style={{ width: 420 }}>
      <Field
        label="starting pace"
        caption="breaths per minute · 4 to 9"
        control={
          <Stepper
            value={pace.toFixed(1)}
            onDecrement={() => setPace((current) => Math.max(4, current - 0.5))}
            onIncrement={() => setPace((current) => Math.min(9, current + 0.5))}
          />
        }
      />
      <Field
        label="sound"
        caption="tones follow the ring so you can close your eyes"
        control={
          <SegmentedControl
            value={sound}
            onChange={setSound}
            options={[
              { label: 'tones', value: 'tones' },
              { label: 'silent', value: 'silent' },
            ]}
          />
        }
      />
    </div>
  );
}

export const Stacked: Story = { render: () => <SettingsDemo /> };
