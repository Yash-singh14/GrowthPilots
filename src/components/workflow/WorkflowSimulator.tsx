import React, { useState } from 'react';
import { Play, RotateCcw, CheckCircle2, Clock, AlertTriangle, Database, CheckSquare, Cpu, FileText, Bell, Terminal } from 'lucide-react';
import { INITIAL_WORKFLOW_STEPS, WorkflowStepState } from '../../data/workflowData';

export const WorkflowSimulator: React.FC = () => {
  const [steps, setSteps] = useState<WorkflowStepState[]>(INITIAL_WORKFLOW_STEPS);
  const [isRunning, setIsRunning] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(-1);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    '[INIT] Workflow Engine initialized (Simulated Sandbox Runner).',
    '[READY] Click "Execute Sample Workflow" to trace step-by-step pipeline execution.',
  ]);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStepIndex(0);

    // Reset steps
    setSteps(prev => prev.map(s => ({ ...s, status: 'pending' })));
    setTerminalLogs([
      `[SIMULATION START] Triggering ETL Batch at ${new Date().toLocaleTimeString()}...`,
    ]);

    const stepDelays = [1200, 1000, 1600, 1300, 900];

    let current = 0;

    const executeNext = () => {
      if (current >= INITIAL_WORKFLOW_STEPS.length) {
        setIsRunning(false);
        setActiveStepIndex(-1);
        setTerminalLogs(prev => [
          ...prev,
          `[SUCCESS] Pipeline completed successfully. 1,420 transactions validated and reports dispatched in 6.0s.`,
        ]);
        return;
      }

      setActiveStepIndex(current);
      setSteps(prev =>
        prev.map((s, idx) => (idx === current ? { ...s, status: 'running' } : s))
      );

      const currentStep = INITIAL_WORKFLOW_STEPS[current];
      setTerminalLogs(prev => [
        ...prev,
        `[STAGE ${current + 1}/${INITIAL_WORKFLOW_STEPS.length}] Executing ${currentStep.name}...`,
        `   ↳ ${currentStep.sampleLog}`,
      ]);

      setTimeout(() => {
        setSteps(prev =>
          prev.map((s, idx) => (idx === current ? { ...s, status: 'completed' } : s))
        );
        current++;
        executeNext();
      }, stepDelays[current] || 1000);
    };

    executeNext();
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setActiveStepIndex(-1);
    setSteps(INITIAL_WORKFLOW_STEPS);
    setTerminalLogs([
      '[RESET] Workflow reset to initial state.',
      '[READY] Ready for next execution cycle.',
    ]);
  };

  const getStepIcon = (stage: string) => {
    switch (stage) {
      case 'Data Sources':
        return <Database className="w-5 h-5" />;
      case 'Data Validation':
        return <CheckSquare className="w-5 h-5" />;
      case 'Processing':
        return <Cpu className="w-5 h-5" />;
      case 'Report Generation':
        return <FileText className="w-5 h-5" />;
      case 'Notification':
        return <Bell className="w-5 h-5" />;
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-900 text-blue-300 border border-blue-700/60">
              Interactive Architecture Simulation
            </span>
            <span className="text-xs text-slate-400">
              (Illustrative Mock Runner)
            </span>
          </div>
          <h3 className="text-lg font-bold text-white mt-1">
            Automated MIS & Data Consolidation Pipeline
          </h3>
          <p className="text-xs text-slate-400">
            Traces the 5 automated steps from raw spreadsheet dumps to verified board reports.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={resetSimulation}
            disabled={isRunning}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 disabled:opacity-50 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
          <button
            onClick={runSimulation}
            disabled={isRunning}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-brand-blue hover:bg-brand-blue-hover text-white shadow transition-all disabled:opacity-50"
          >
            <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-pulse' : ''}`} />
            <span>{isRunning ? 'Pipeline Executing...' : 'Execute Sample Workflow'}</span>
          </button>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Step Nodes Flow Visualization */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative z-10">
            {steps.map((step, idx) => {
              const isRunningStep = step.status === 'running';
              const isCompleted = step.status === 'completed';

              return (
                <div
                  key={step.id}
                  className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                    isRunningStep
                      ? 'bg-blue-50/80 border-brand-blue ring-2 ring-brand-blue/30 shadow-md'
                      : isCompleted
                      ? 'bg-emerald-50/50 border-emerald-300 shadow-sm'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`p-2 rounded-lg ${
                          isRunningStep
                            ? 'bg-brand-blue text-white animate-bounce'
                            : isCompleted
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {getStepIcon(step.stage)}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Step {step.order}
                      </span>
                    </div>

                    <span className="text-[10px] font-semibold text-brand-blue uppercase tracking-wide block mb-1">
                      {step.stage}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 leading-snug mb-1">
                      {step.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-normal line-clamp-3">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {step.duration}
                    </span>
                    <span
                      className={`font-semibold flex items-center gap-1 ${
                        isCompleted
                          ? 'text-emerald-700'
                          : isRunningStep
                          ? 'text-blue-700'
                          : 'text-slate-400'
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" /> Done
                        </>
                      ) : isRunningStep ? (
                        'Running...'
                      ) : (
                        'Pending'
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Terminal / Execution Log Output */}
        <div className="bg-slate-950 rounded-xl p-4 font-mono text-xs text-slate-300 border border-slate-800 shadow-inner">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-400">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-brand-cyan" />
              <span className="text-[11px] font-semibold">Simulated Execution Telemetry Log</span>
            </div>
            <span className="text-[10px] text-slate-500">Python 3.12 / Pandas Worker</span>
          </div>

          <div className="space-y-1 max-h-36 overflow-y-auto pr-2">
            {terminalLogs.map((log, i) => (
              <div
                key={i}
                className={
                  log.includes('[SUCCESS]')
                    ? 'text-emerald-400 font-bold'
                    : log.includes('[STAGE')
                    ? 'text-brand-cyan'
                    : log.includes('[INIT]') || log.includes('[RESET]')
                    ? 'text-slate-400'
                    : 'text-slate-200'
                }
              >
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
