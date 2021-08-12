export type WeightData = { date: string; weight: number } | null;
type HealthMaxData = {
  weight: WeightData[][];
};

const data: HealthMaxData = {
  weight: [
    [
      {
        date: "2019-01-12T13:35:53Z",
        weight: 59.2,
      },
      {
        date: "2019-02-16T12:15:08Z",
        weight: 77.1,
      },
      {
        date: "2019-03-12T09:08:10Z",
        weight: 64.9,
      },
      {
        date: "2019-04-12T08:35:56Z",
        weight: 54,
      },
      {
        date: "2019-05-12T07:54:33Z",
        weight: 51.3,
      },
      {
        date: "2019-06-12T07:13:04Z",
        weight: 55.4,
      },
      {
        date: "2019-07-12T05:32:14Z",
        weight: 51.3,
      },
      {
        date: "2019-08-12T04:30:21Z",
        weight: 73.6,
      },
      {
        date: "2019-09-12T04:15:31Z",
        weight: 60.1,
      },
      {
        date: "2019-10-12T03:30:49Z",
        weight: 67.8,
      },
      {
        date: "2019-11-12T03:30:21Z",
        weight: 73.6,
      },
      {
        date: "2019-12-12T01:32:22Z",
        weight: 70.1,
      },
    ],
    [
      {
        date: "2020-01-12T13:35:53Z",
        weight: 59.2,
      },
      {
        date: "2020-02-16T12:15:08Z",
        weight: 77.1,
      },
      {
        date: "2020-03-12T09:08:10Z",
        weight: 64.9,
      },
      {
        date: "2020-04-12T08:35:56Z",
        weight: 54,
      },
      {
        date: "2020-05-12T07:54:33Z",
        weight: 51.3,
      },
      {
        date: "2020-06-12T07:13:04Z",
        weight: 55.4,
      },
      {
        date: "2020-07-12T05:32:14Z",
        weight: 51.3,
      },
      {
        date: "2020-08-12T04:30:21Z",
        weight: 73.6,
      },
      {
        date: "2020-09-12T04:15:31Z",
        weight: 60.1,
      },
      {
        date: "2020-10-12T03:30:49Z",
        weight: 67.8,
      },
      {
        date: "2020-11-12T03:30:21Z",
        weight: 73.6,
      },
      {
        date: "2020-12-12T01:32:22Z",
        weight: 70.1,
      },
    ],
    [
      {
        date: "2021-01-12T01:30:01Z",
        weight: 64.5,
      },
      {
        date: "2021-02-11T20:26:40Z",
        weight: 65.8,
      },
      {
        date: "2021-03-11T19:45:41Z",
        weight: 60.1,
      },
      {
        date: "2021-04-11T19:16:46Z",
        weight: 50.8,
      },
      {
        date: "2021-05-11T18:05:03Z",
        weight: 73.8,
      },
      {
        date: "2021-06-11T17:46:38Z",
        weight: 59.2,
      },
      {
        date: "2021-07-11T17:46:17Z",
        weight: 64.1,
      },
      {
        date: "2021-08-11T16:50:36Z",
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
