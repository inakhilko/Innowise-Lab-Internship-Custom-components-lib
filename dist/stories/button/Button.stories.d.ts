import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';
declare const meta: Meta<typeof Example>;
export default meta;
type Story = StoryObj<Parameters<typeof Example>[0]>;
export declare const Text: Story;
export declare const TextHovered: Story;
export declare const Contained: Story;
export declare const ContainedHovered: Story;
export declare const Outlined: Story;
export declare const OutlinedHovered: Story;
export declare const Small: Story;
export declare const Medium: Story;
export declare const Large: Story;
