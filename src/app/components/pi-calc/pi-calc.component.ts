import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as Chart from 'chart.js';

interface SimResult {
  trials: number;
  hits: number;
}

interface Point {
  x: number;
  y: number;
  hit: boolean;
}

@Component({
  selector: 'app-pi-calc',
  templateUrl: './pi-calc.component.html',
  styleUrls: ['./pi-calc.component.scss'],
})
export class PiCalcComponent implements OnInit {
  trialsCtrl = this.fb.control(10);
  results: SimResult[] = [];
  points: Point[] = [];
  canvas: Chart | undefined;

  constructor(readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.canvas = new Chart('resultGraph', {
      type: 'scatter',
      data: {
        datasets: [
          { label: 'Hits', data: [], backgroundColor: '#FC4445' },
          {
            label: 'Misses',
            data: [],
            backgroundColor: '#55BCC9',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMin: -1,
                suggestedMax: 1,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                suggestedMin: -1,
                suggestedMax: 1,
              },
            },
          ],
        },
      },
    });
  }

  runSim(): void {
    const trials = this.trialsCtrl.value;
    this.results.push(this.runMonteCarlo(trials));
    this.updateVisual();
  }

  runMonteCarlo(trials: number): SimResult {
    const radius = 1;
    let hits = 0;

    this.points = [];

    for (let i = 0; i < trials; i++) {
      const x = Math.random() * (2 * radius) - radius;
      const y = Math.random() * (2 * radius) - radius;
      const point: Point = { x, y, hit: false };

      const dist = Math.sqrt(x * x + y * y); //distance from the center
      if (dist <= radius) {
        point.hit = true;
        hits++;
      }
      this.points.push(point);
    }
    return {
      trials,
      hits,
    };
  }

  updateVisual() {
    if (this.canvas?.data?.datasets) {
      this.canvas.data.datasets[0].data = this.points.filter(
        (point: Point) => point.hit
      );
      this.canvas.data.datasets[1].data = this.points.filter(
        (point: Point) => !point.hit
      );
      this.canvas.update();
    }
  }

  calcPi(hits: number, trials: number): number {
    return (4 * hits) / trials;
  }

  reset(): void {
    this.trialsCtrl.setValue(10);
    this.results = [];
    this.points = [];
    this.updateVisual();
  }
}
