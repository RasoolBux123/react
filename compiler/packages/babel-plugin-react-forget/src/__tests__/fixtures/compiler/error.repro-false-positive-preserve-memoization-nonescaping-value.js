// @validatePreserveExistingMemoizationGuarantees @enableAssumeHooksFollowRulesOfReact @enableTransitivelyFreezeFunctionExpressions
function Component({ entity, children }) {
  // showMessage doesn't escape so we don't memoize it.
  // However, validatePreserveExistingMemoizationGuarantees only sees that the scope
  // doesn't exist, and thinks the memoization was missed instead of being intentionally dropped.
  const showMessage = useCallback(() => entity != null);

  if (!showMessage) {
    return children;
  }

  return <Message>{children}</Message>;
}
