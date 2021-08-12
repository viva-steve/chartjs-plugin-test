export type WeightData = { date: string; weight: number } | null;
type HealthMaxData = {
  weight: WeightData[][];
};

const data: HealthMaxData = {
  weight: [
    [
      {
        date: "2020-05-12T13:35:53Z",
        weight: 59.2,
      },
      {
        date: "2020-05-12T12:15:08Z",
        weight: 77.1,
      },
      {
        date: "2020-05-12T09:08:10Z",
        weight: 64.9,
      },
      {
        date: "2020-05-12T08:35:56Z",
        weight: 54,
      },
      {
        date: "2020-05-12T07:54:33Z",
        weight: 51.3,
      },
      {
        date: "2020-05-12T07:13:04Z",
        weight: 55.4,
      },
      {
        date: "2020-05-12T05:32:14Z",
        weight: 51.3,
      },
      {
        date: "2020-05-12T04:30:21Z",
        weight: 73.6,
      },
      {
        date: "2020-05-12T04:15:31Z",
        weight: 60.1,
      },
      {
        date: "2020-05-12T03:30:49Z",
        weight: 67.8,
      },
      {
        date: "2020-05-12T03:30:21Z",
        weight: 73.6,
      },
      {
        date: "2020-05-12T01:32:22Z",
        weight: 70.1,
      },
    ],
    [
      {
        date: "2020-05-12T01:30:01Z",
        weight: 64.5,
      },
      {
        date: "2020-05-11T20:26:40Z",
        weight: 65.8,
      },
      {
        date: "2020-05-11T19:45:41Z",
        weight: 60.1,
      },
      {
        date: "2020-05-11T19:16:46Z",
        weight: 50.8,
      },
      {
        date: "2020-05-11T18:05:03Z",
        weight: 73.8,
      },
      {
        date: "2020-05-11T17:46:38Z",
        weight: 59.2,
      },
      {
        date: "2020-05-11T17:46:17Z",
        weight: 64.1,
      },
      {
        date: "2020-05-11T16:50:36Z",
        weight: 57.3,
      },
      null,
      null,
      null,
      null,
    ],
  ],
};

export default data;
