import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import {
  profileById,
  scoreForProfile,
  type ProfileId,
  type Profile,
  type ScoredInstitute,
} from "@/lib/profile-scoring";

type Ctx = {
  profileId: ProfileId;
  setProfileId: (id: ProfileId) => void;
  profile: Profile;
  ranked: ScoredInstitute[];
};

const ProfileCtx = createContext<Ctx | null>(null);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profileId, setProfileId] = useState<ProfileId>("switcher");
  const value = useMemo<Ctx>(
    () => ({
      profileId,
      setProfileId,
      profile: profileById(profileId),
      ranked: scoreForProfile(profileId),
    }),
    [profileId],
  );
  return <ProfileCtx.Provider value={value}>{children}</ProfileCtx.Provider>;
}

export function useProfile(): Ctx {
  const ctx = useContext(ProfileCtx);
  if (!ctx) throw new Error("useProfile must be used inside ProfileProvider");
  return ctx;
}
