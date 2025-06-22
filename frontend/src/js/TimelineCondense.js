import claims from "../data/claims.json";
import movements from "../data/movement_values.json";
import status from "../data/status_history.json";
import timeline from "../data/time_line.json";
import transactions from "../data/transactions.json";
import workflows from "../data/workflows.json";

export function transformTimelineData() {
  const wfData = workflows.entityworkflowsview.ttEntityWorkflowsView;
  const timelineData = timeline.Elements;
  const movementData = movements.movementvaluesview.ttMovementValueView;
  const transData =
    transactions.contracttransactionsview.ttContractTransactionsView;
  const claimData = claims.entityincidentsview.ttEntityIncidentsView;
  const statusData = status.entitystatushistoryview.ttEntityStatusHistoryView;

  const condensedStatusData = statusData.map((item) => ({
    process: "Status",
    obj: item.statusHistoryObj,
    code: "",
    description: `${item.statusNotes} : ${item.statusDescription}`,
    status: "",
    completed: item.effectiveDate,
    year: String(item.effectiveDate).slice(
      0,
      String(item.effectiveDate).indexOf("-")
    ),
    month: String(item.effectiveDate).slice(
      String(item.effectiveDate).indexOf("-") + 1,
      String(item.effectiveDate).indexOf("-") + 3
    ),
    amount: "",
  }));

  const condensedClaimData = claimData.map((item) => ({
    process: "Claims",
    obj: item.incidentObj,
    code: item.claimReference,
    description: item.claimType,
    status: item.claimStatus,
    completed: item.claimDate,
    year: String(item.claimDate).slice(0, String(item.claimDate).indexOf("-")),
    month: String(item.claimDate).slice(
      String(item.claimDate).indexOf("-") + 1,
      String(item.claimDate).indexOf("-") + 3
    ),
    amount: String(item.settlementAmount).replace("-", ""),
  }));

  const condensedTransData = transData.map((item) => ({
    process: "Transactions",
    obj: item.accountTransactionObj,
    code: "",
    description: `${item.transactionTypeDescription} : ${item.systemStatusDescription}`,
    status: item.transactionStatusTla,
    completed: item.transactionDate,
    year: String(item.transactionDate).slice(
      0,
      String(item.transactionDate).indexOf("-")
    ),
    month: String(item.transactionDate).slice(
      String(item.transactionDate).indexOf("-") + 1,
      String(item.transactionDate).indexOf("-") + 3
    ),
    amount: item.amount,
  }));

  const condensedMoveData = movementData.map((item) => ({
    process: "Movements",
    obj: item.movementValueObj,
    code: item.movementType,
    description: `${item.movementDescription} : ${item.transactionTypeDescription}`,
    status: item.transactionStatusTLA,
    completed: item.movementEffectiveDate,
    year: String(item.movementEffectiveDate).slice(
      0,
      String(item.movementEffectiveDate).indexOf("-")
    ),
    month: String(item.movementEffectiveDate).slice(
      String(item.movementEffectiveDate).indexOf("-") + 1,
      String(item.movementEffectiveDate).indexOf("-") + 3
    ),
    amount: item.amount,
  }));

  const condensedWFData = wfData.map((item, index) => ({
    process: "Workflows",
    obj: item.processLogObj,
    code: item.processLogReference,
    description: item.processLabel,
    status: item.statusLabel,
    completed: String(item.completedDateTime).slice(
      0,
      String(item.completedDateTime).indexOf("T")
    ),
    year: String(item.completedDateTime).slice(
      0,
      String(item.completedDateTime).indexOf("-")
    ),
    month: String(item.completedDateTime).slice(
      String(item.completedDateTime).indexOf("-") + 1,
      String(item.completedDateTime).indexOf("-") + 3
    ),
    amount: "0",
  }));
  const condensedTimeData = timelineData.map((item) => ({
    process: "Timeline",
    obj: JSON.parse(item.Label).MovementObj,
    code: item.TypeCode,
    description: item.Description,
    status: "",
    completed: String(JSON.parse(item.Label).EffectiveDate).slice(
      0,
      String(JSON.parse(item.Label).EffectiveDate).indexOf("T")
    ),
    year: String(JSON.parse(item.Label).EffectiveDate).slice(
      0,
      String(JSON.parse(item.Label).EffectiveDate).indexOf("-")
    ),
    month: String(JSON.parse(item.Label).EffectiveDate).slice(
      String(JSON.parse(item.Label).EffectiveDate).indexOf("-") + 1,
      String(JSON.parse(item.Label).EffectiveDate).indexOf("-") + 3
    ),
    amount: JSON.parse(item.Label).Premium,
  }));
  localStorage.setItem("Workflows", JSON.stringify(condensedWFData));
  localStorage.setItem("Timeline", JSON.stringify(condensedTimeData));
  localStorage.setItem("Movements", JSON.stringify(condensedMoveData));
  localStorage.setItem("Transactions", JSON.stringify(condensedTransData));
  localStorage.setItem("Claims", JSON.stringify(condensedClaimData));
  localStorage.setItem("Status", JSON.stringify(condensedStatusData));

  const outputData = [
    ...condensedWFData,
    ...condensedTimeData,
    ...condensedMoveData,
    ...condensedTransData,
    ...condensedClaimData,
    ...condensedStatusData,
  ];

  return outputData;
}
