import * as r from "@assets/images/resources";

export function getResourceIcon(key: string) {
  const resources = r as Record<string, string>;
  return resources[key];
}
