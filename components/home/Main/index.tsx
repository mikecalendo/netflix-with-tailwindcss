import {
  CreateProfilesForKidsCard,
  DownloadYourShowsCard,
  EnjoyYourTVCard,
  FAQCard,
  GetStartedCard,
  WatchEveryWhereCard
} from '../Cards';

export const Main = () => {
  return (
    <>
      <GetStartedCard />
      <EnjoyYourTVCard />
      <DownloadYourShowsCard />
      <WatchEveryWhereCard />
      <CreateProfilesForKidsCard />
      <FAQCard />
    </>
  );
};
