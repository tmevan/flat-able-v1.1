import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import { ChartOptions, ChartType} from 'ng-chartist';

import * as Chartist from 'chartist';

export interface LiveData {
  labels: string[];
  series: Array<Array<number>>;
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

@Component({
  selector: 'app-list-chart',
  templateUrl: './list-chart.component.html',
  styleUrls: ['./list-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListChartComponent implements OnInit, OnDestroy {
  barChartData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    series: [
      [
        5,
        4,
        3,
        7,
        5,
        10,
        3,
        4,
        8,
        10,
        6,
        8
      ],
      [
        3,
        2,
        9,
        5,
        4,
        6,
        4,
        6,
        7,
        8,
        7,
        4
      ]
    ]
  };
  lineChartData = {
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday'
    ],
    series: [
      [
        12,
        9,
        7,
        8,
        5
      ],
      [
        2,
        1,
        3.5,
        7,
        3
      ],
      [
        1,
        3,
        4,
        5,
        6
      ]
    ]
  };
  lineChartIrregularData = {
    labels: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ],
    series: [
      [
        5,
        5,
        10,
        8,
        7,
        5,
        4,
        null,
        null,
        null,
        10,
        10,
        7,
        8,
        6,
        9
      ],
      [
        10,
        15,
        null,
        12,
        null,
        10,
        12,
        15,
        null,
        null,
        12,
        null,
        14,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        3,
        4,
        1,
        3,
        4,
        6,
        7,
        9,
        5,
        null,
        null,
        null
      ]
    ]
  };
  scatterChartData = {
    labels: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52
    ],
    series: [
      [
        53.761530227932376,
        55.06077543488965,
        90.15619763154757,
        37.945743703232026,
        90.15064659594809,
        72.37213982905773,
        29.242023161826005,
        10.613377393892765,
        41.13272180459888,
        66.89170357483623,
        85.47173517613665,
        80.61313435041848,
        33.86466777842112,
        6.993834151672074,
        58.93321826442517,
        84.4944785171936,
        66.47863439014286,
        26.61792342884319,
        64.7715312645164,
        66.7721238997995,
        24.81459377695263,
        82.09485043326285,
        94.28939258245515,
        81.16315118589196,
        26.285515136087987,
        94.25034710171474,
        82.86738500874603,
        42.275860431799764,
        7.252221593822195,
        12.509815755028853,
        57.592396396889086,
        16.98227807583916,
        82.13296667627357,
        20.7798608815297,
        1.4886093931434141,
        27.717128889831557,
        83.02006467579533,
        46.825802760236044,
        4.449951322677559,
        63.949111152579285,
        76.2705142938321,
        92.84217568625859,
        33.34033701723147,
        83.32421059421287,
        30.95015406095809,
        99.26555827017742,
        64.73104862164556,
        58.3205528852039,
        98.07205383638176,
        34.217237701943006,
        76.84029415694194,
        77.51086205882534
      ],
      [
        68.01743447487219,
        33.569040390627556,
        55.83518094287856,
        6.424873491809824,
        40.24108430485855,
        12.867529962712322,
        33.9171424717146,
        66.13486382709537,
        75.36042883674916,
        37.18758127466557,
        46.080488500245266,
        40.98286341759507,
        25.372664387026923,
        40.063178151024424,
        73.6495194240123,
        48.56310577188692,
        22.903651846539972,
        91.5635618730181,
        84.08459591966795,
        49.153284675642595,
        34.82239557500657,
        38.7753190443602,
        77.57931404198679,
        78.24594487949813,
        42.96149738863182,
        68.87344162290039,
        73.35891706187205,
        79.20638493178991,
        39.862955442611494,
        67.72254472880542,
        32.5667298714178,
        67.8951691474951,
        68.22845079029227,
        24.013142038835245,
        84.77387385278308,
        81.96540495436318,
        21.938120212431865,
        20.591735159801374,
        44.392082366517926,
        99.42917256114683,
        75.80197000496361,
        44.95928290576234,
        56.30251437622547,
        81.39575345403685,
        46.6480941362678,
        60.30444929651577,
        63.904344644822956,
        96.31525902388087,
        80.79036620032171,
        67.94970208668927,
        81.84914397158013,
        64.34930133297705
      ],
      [
        94.83796449464408,
        0.05012881656139001,
        78.03842883107683,
        86.85066315022306,
        63.09834842166116,
        23.82558487142836,
        95.04013234951407,
        91.84355248378253,
        12.28927042529946,
        91.59027939302398,
        44.15426456286402,
        38.40309269293461,
        3.0323072732378,
        51.442756807992104,
        51.067878308530304,
        68.87925798432126,
        9.786004373688861,
        93.42472024399827,
        7.196590706996409,
        90.61672585107475,
        82.64800742042794,
        29.33983554466535,
        27.575295787547738,
        63.76900610636933,
        44.31691167371892,
        35.02049600051234,
        77.91406665575869,
        9.594366007019817,
        33.17507518940415,
        45.94854823450043,
        6.028395302814493,
        97.36303808493578,
        20.735238575670635,
        11.577295085428618,
        49.377810037702986,
        7.984978938697163,
        81.52380171386066,
        86.62152122764415,
        46.81516933597669,
        72.70055546352265,
        39.482785893198404,
        2.1729768023229346,
        32.730007414228865,
        11.8384494034782,
        97.04367174876609,
        37.87839695714026,
        96.1605067491887,
        24.340714355822968,
        90.92986653306863,
        1.9182109464024322,
        36.43773292877359,
        51.562138311337314
      ],
      [
        90.93023971442824,
        91.24607758668748,
        83.11135627737995,
        38.89630350329263,
        47.48702934796674,
        83.10718371512166,
        93.40725921590878,
        62.65211828434698,
        76.93458061916239,
        94.13663459332706,
        15.47636651231441,
        93.70144628274673,
        80.7911280644665,
        32.06886936152644,
        6.458421962605865,
        14.668285135928372,
        10.700783089925082,
        46.997088144127886,
        53.02589740808132,
        15.662154340561152,
        94.70275097718405,
        59.27632659816442,
        53.88591373783527,
        21.602789791233846,
        29.326094253488066,
        8.159091366607441,
        52.57892041859127,
        71.68439221439431,
        61.773032787481455,
        43.02319475997418,
        97.7745443722398,
        41.77024219267196,
        32.79576671635134,
        26.614574588124352,
        96.60428591791621,
        68.90454201273897,
        33.39711159158707,
        94.56531035270376,
        83.77269890317353,
        72.91107164394433,
        50.31188574983041,
        54.67801129631369,
        69.65510719649639,
        59.96153020907791,
        50.66882388014429,
        97.73196339743835,
        12.936677564924759,
        30.197501751145396,
        7.071721221094629,
        60.85688790258899,
        51.276925828485446,
        30.951614223635193
      ]
    ]
  };
  scatterChartOption = {
    height: 300,
    showLine: false,
    axisX: {
      labelInterpolationFnc: function(value: number, index: number): string {
        return index % 13 === 0 ? `W${value}` : null;
      }
    }
  };
  scatterChartResponsiveOption = [
    [
      'screen and (min-width: 640px)',
      {
        axisX: {
          labelInterpolationFnc: function(value: number, index: number): string {
            return index % 4 === 0 ? `W${value}` : null;
          }
        }
      }
    ]
  ];
  areaChartData = {
    labels: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    series: [
      [
        5,
        9,
        7,
        8,
        5,
        3,
        5,
        4
      ]
    ]
  };
  areaChartOption = {
    height: 300,
    low: 0,
    showArea: true
  };
  biPolarChartData = {
    labels: [
      'W1',
      'W2',
      'W3',
      'W4',
      'W5',
      'W6',
      'W7',
      'W8',
      'W9',
      'W10'
    ],
    series: [
      [
        1,
        2,
        4,
        8,
        6,
        -2,
        -1,
        -4,
        -6,
        -2
      ]
    ]
  };
  biPolarChartOption = {
    height: 300,
    high: 10,
    low: -10,
    axisX: {
      labelInterpolationFnc: function(value: number, index: number): number {
        return index % 2 === 0 ? value : null;
      }
    }
  };
  distributedChartData = {
    labels: [
      'XS',
      'S',
      'M',
      'L',
      'XL',
      'XXL',
      'XXXL'
    ],
    series: [
      20,
      60,
      120,
      200,
      180,
      20,
      10
    ]
  };
  distributedChartOption = {
    height: 300,
    distributeSeries: true
  };
  pieChartData = {
    series: [
      20,
      10,
      30,
      40
    ]
  };
  pieChartOption = {
    height: 300,
    donut: true,
    donutWidth: 60,
    startAngle: 270,
    total: 200,
    showLabel: false
  };
  pieFullChartOption = {
    height: 300,
    donut: true,
    showLabel: false
  };
  /*async chart*/
  data: Promise<Chartist.IChartistData>;
  type: Promise<ChartType>;
  /*live chart*/
  dataLiveChart: LiveData;
  typeLiveChart: ChartType;
  optionLiveChart: ChartOptions;
  private interval: any;
  /*dynamic chart*/
  typeDynamicChart: ChartType;
  dataDynamicChart: Chartist.IChartistData;
  optionsDynamicChart: any;
  chartTypes: ChartType[];
  /*advance*/
  biPolarLineAreaData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [1, 2, 3, 1, -2, 0, 1, 0],
      [-2, -1, -2, -1, -2.5, -1, -2, -1],
      [0, 0, 0, 1, 2, 2.5, 2, 1],
      [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
    ]
  };
  biPolarLineAreaOption = {
    height: 500,
    high: 3,
    low: -3,
    showArea: true,
    showLine: false,
    showPoint: false,
    fullWidth: true,
    axisX: {
      showLabel: true,
      showGrid: false
    }
  };
  seriesOverChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    series: [{
      name: 'series-1',
      data: [5, 2, -4, 2, 0, -2, 5, -3]
    }, {
      name: 'series-2',
      data: [4, 3, 5, 3, 1, 3, 6, 4]
    }, {
      name: 'series-3',
      data: [2, 4, 3, 1, 4, 5, 3, 2]
    }]
  };
  seriesOverChartOption = {
    height: 500,
    fullWidth: true,
    series: {
      'series-1': {
        lineSmooth: Chartist.Interpolation.step()
      },
      'series-2': {
        lineSmooth: Chartist.Interpolation.simple(),
        showArea: true
      },
      'series-3': {
        showPoint: false
      }
    }
  };
  seriesOverChartResponsiveOption = [
    ['screen and (max-width: 320px)', {
      series: {
        'series-1': {
          lineSmooth: Chartist.Interpolation.none()
        },
        'series-2': {
          lineSmooth: Chartist.Interpolation.none(),
          showArea: false
        },
        'series-3': {
          lineSmooth: Chartist.Interpolation.none(),
          showPoint: true
        }
      }
    }]
  ];
  horizontalChartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    series: [
      [5, 4, 3, 7, 5, 10, 3],
      [3, 2, 9, 5, 4, 6, 4]
    ]
  };
  horizontalChartOption = {
    height: 500,
    seriesBarDistance: 10,
    reverseData: true,
    horizontalBars: true,
    axisY: {
      offset: 70
    }
  };

  constructor() {
    /*async chart*/
    this.data = new Promise(function(resolve: any): void {
      setTimeout(function(): void {
        resolve({
          series: [
            20,
            10,
            30,
            40
          ]
        });
      }, 5000);
    });

    this.type = new Promise(function(resolve: any): void {
      setTimeout(function(): void {
        resolve('Pie');
      }, 5000);
    });

    /*live chart*/
    this.dataLiveChart = {
      labels: [],
      series: []
    };
    this.typeLiveChart = 'Bar';
    this.optionLiveChart = {
      height: 300
    };

    this.interval = setInterval(() => {
      const time: Date = new Date();
      const formattedTime: string = [time.getHours(), time.getMinutes(), time.getSeconds()].join(':');
      const random: number = getRandomInt(1, 40);

      this.dataLiveChart.labels.push(formattedTime);
      this.dataLiveChart.series.push([random]);

      this.dataLiveChart = Object.assign({}, this.dataLiveChart);
    }, 2500);

    /*dynamic chart*/
    this.chartTypes = ['Bar', 'Line'];

    this.typeDynamicChart = 'Line';
    this.dataDynamicChart = this.barChartData;
    this.optionsDynamicChart = {
      height: 300,
      axisX: {
        showLabel: false
      },
      axisY: {
        showLabel: false
      }
    };
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit() {
  }

}
