// Content constants for the landing page

export const QUICK_ACTIONS = [
  {
    id: 'add-goals',
    title: 'Add Goals',
    description: 'Track long-term objectives with AI-generated memorable codenames',
    icon: 'target',
  },
  {
    id: 'track-todos',
    title: 'Track Todos',
    description: 'Quick task capture with automatic history logging upon completion',
    icon: 'check-square',
  },
  {
    id: 'search-memories',
    title: 'Search Memories',
    description: 'Semantic recall across all your data using natural language',
    icon: 'search',
  },
  {
    id: 'generate-proposals',
    title: 'Generate Proposals',
    description: 'AI-powered action plans based on your goals and history',
    icon: 'lightbulb',
  },
];

export const FEATURES = [
  {
    id: 'goals',
    title: 'Goals with smart codenames',
    description: 'AI-generated memorable codenames make tracking goals effortless. Each goal gets a unique, easy-to-remember name for quick reference.',
    icon: 'target',
  },
  {
    id: 'todos',
    title: 'Todos with auto-history logging',
    description: 'Quick task capture that automatically logs to your history when completed. Never lose track of what you accomplished.',
    icon: 'check-circle',
  },
  {
    id: 'history',
    title: 'Daily history timeline',
    description: 'Comprehensive activity log with retroactive date support. Track what you did, when you did it, all in Markdown.',
    icon: 'calendar',
  },
  {
    id: 'recall',
    title: 'Semantic recall (Claude Code)',
    description: 'Search your memories using natural language. Claude Code analyzes your data to find exactly what you\'re looking for.',
    icon: 'brain',
  },
  {
    id: 'propose',
    title: 'Action proposals',
    description: 'AI-generated recommendations based on your goals, history, and reflections. Stay on track with intelligent suggestions.',
    icon: 'zap',
  },
  {
    id: 'reflect',
    title: 'Guided reflection',
    description: 'Interactive prompts for daily and weekly introspection. Build self-awareness and track personal growth.',
    icon: 'message-circle',
  },
];

export const WORKFLOW_STEPS = [
  {
    id: 'capture',
    title: 'Capture',
    description: 'Add goals, todos, and history as you go. Everything is stored locally in human-readable Markdown files.',
    command: 'aissist goal add "Launch website"',
  },
  {
    id: 'understand',
    title: 'Understand',
    description: 'Recall anything semantically with natural language queries. Claude Code analyzes your data to surface relevant memories.',
    command: 'aissist recall "website design decisions"',
  },
  {
    id: 'plan',
    title: 'Plan',
    description: 'Generate AI-powered proposals for today, this week, or any timeframe based on your goals and history.',
    command: 'aissist propose today',
  },
  {
    id: 'reflect',
    title: 'Reflect',
    description: 'Daily and weekly reflection prompts help you build self-awareness and track personal growth over time.',
    command: 'aissist reflect daily',
  },
];
