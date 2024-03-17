import { Component, OnInit } from '@angular/core';

interface Transaction {
  customerId: string;
  month: string;
  amount: number;
}

interface Reward {
  customerId: string;
  pointsPerMonth: { [key: string]: number };
  totalPoints: number;
}

@Component({
  selector: 'app-reward-points',
  templateUrl: './reward-points.component.html',
  styleUrls: ['./reward-points.component.css']
})
export class RewardPointsComponent implements OnInit {
  transactionsData: Transaction[] = [
    {"customerId": "Customer1", "month": "January", "amount": 120},
    {"customerId": "Customer1", "month": "February", "amount": 80},
    {"customerId": "Customer1", "month": "February", "amount": 60},
    {"customerId": "Customer2", "month": "January", "amount": 150},
    {"customerId": "Customer2", "month": "January", "amount": 70},
    {"customerId": "Customer2", "month": "February", "amount": 40},
    {"customerId": "Customer3", "month": "March", "amount": 90},
    {"customerId": "Customer3", "month": "March", "amount": 110},
    {"customerId": "Customer3", "month": "March", "amount": 70}
  ];

  rewards: Reward[] = [];
  months: string[] = [];

  ngOnInit(): void {
    this.calculateRewards();
  }

  calculateRewards(): void {
    const rewardsMap = new Map<string, Reward>();

    this.transactionsData.forEach(transaction => {
      const customerId = transaction.customerId;
      const month = transaction.month;
      const amount = transaction.amount;

      if (!rewardsMap.has(customerId)) {
        rewardsMap.set(customerId, {
          customerId: customerId,
          pointsPerMonth: {},
          totalPoints: 0
        });
      }

      const reward = rewardsMap.get(customerId)!;
      const points = this.calculateRewardPoints(amount);

      if (!reward.pointsPerMonth[month]) {
        reward.pointsPerMonth[month] = 0;
      }

      reward.pointsPerMonth[month] += points;
      reward.totalPoints += points;
    });

    this.rewards = Array.from(rewardsMap.values());
    this.months = Array.from(new Set(this.transactionsData.map(transaction => transaction.month)));
  }

  calculateRewardPoints(amount: number): number {
    let points = 0;
    if (amount > 100) {
      points += 50 + (amount - 100) * 2;
    }
    else points = 0;
    
    return points;
  }
}
