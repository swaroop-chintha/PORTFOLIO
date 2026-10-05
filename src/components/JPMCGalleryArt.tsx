/**
 * Legacy artifact wrapper kept for backwards-compatibility of imports.
 * Renders real authentic photographs instead of generated graphics.
 */

export function JPMCTeamFrame() {
  return (
    <div className="rounded-xl overflow-hidden border border-black/10 shadow-lg bg-neutral-900">
      <img
        src="/assets/projects/jpmc/jpmc1.jpeg"
        alt="JPMorganChase Code for Good Team Photo"
        className="w-full h-auto object-contain"
        loading="lazy"
      />
    </div>
  );
}

export function JPMCArtifactsFlatlay() {
  return (
    <div className="rounded-xl overflow-hidden border border-black/10 shadow-lg bg-neutral-900">
      <img
        src="/assets/projects/jpmc/jpmc2.jpeg"
        alt="JPMorganChase Code for Good Certificate and Swag"
        className="w-full h-auto object-contain"
        loading="lazy"
      />
    </div>
  );
}
