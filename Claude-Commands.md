# Claude Code Command Reference

Quick reference for Claude Code commands and workflows for the hedfirst-financial-mvp project.

## BASIC COMMANDS

### Starting & Managing Sessions
```bash
claude                           # Start Claude Code
claude --continue               # Resume last conversation
claude --continue --interactive # Choose conversation to resume
```

### Authentication & Configuration
```bash
/logout                         # Sign out of Claude Code
/login                          # Sign in to Claude Code
/model                          # Switch between Sonnet/Opus models
/help                           # Show all available commands
```

## DEVELOPMENT COMMANDS

### Code Understanding & Analysis
```bash
/explain [file/function]        # Get detailed explanation of complex code
/explain src/components/Calculator.js
/explain calculateFinancialMetrics
```

### Testing & Quality
```bash
/test [file]                    # Generate comprehensive unit tests
/test src/utils/calculations.js
/test components/Dashboard.jsx
```

### Code Improvement
```bash
/refactor [file] "description"  # Improve code structure
/refactor src/models/Financial.js "simplify validation logic"
/optimize [file]                # Performance improvements
/debug "issue description"      # Troubleshoot specific problems
```

## PROJECT COMMANDS

### Session Management
```bash
/history                        # View conversation history
/print                          # Show previous conversation
/bug                            # Report issues to Anthropic
?                               # Show available shortcuts
```

## WORKFLOW TIPS

### Best Practices
- **Use specific file paths** in commands for precise targeting
- **Break complex requests** into small, manageable steps
- **Ask for explanations** before making significant changes
- **Use /continue** for multi-part tasks that span multiple sessions

### Example Workflows
```bash
# Financial model development workflow
/explain src/models/FinancialModel.js
/test src/models/FinancialModel.js
/refactor src/models/FinancialModel.js "improve calculation accuracy"
/optimize src/models/FinancialModel.js
```

### File-Specific Commands
```bash
# For React components
/explain src/components/Dashboard.jsx
/test src/components/Dashboard.jsx

# For utility functions
/explain src/utils/calculations.js
/optimize src/utils/calculations.js

# For configuration files
/explain package.json
/explain .env.example
```

## SHORTCUTS

- `?` - Quick help and shortcuts
- `Ctrl+C` - Cancel current operation
- `Tab` - Auto-complete file paths
- `↑/↓` - Navigate command history

---

*Last updated: August 2025*
*Project: hedfirst-financial-mvp*