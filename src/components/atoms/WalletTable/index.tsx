import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";
import { Cryptocoins } from "@/services/cryptocoins";
import styles from "./styles.module.scss";
import { formatNumber } from "@/utils/moneyFormat";
import { CurrencyChange } from "../CurrencyChange";
import { Button } from "../Button";

interface Props {
  cryptos: Cryptocoins[];
	onTransferCryptoClick: () => void;

}

export function WalletTable(props: Props) {




  const table = useReactTable({
    data: props.cryptos,
    columns: [
      {
        header: "#",
        cell: (txt) => <span>{txt.row.index+1}</span>,
      },
      {
        header: "Crypto",
        cell: (txt) => {
          const row = txt.row.original;
          const parsedCoinName = row.name.toLowerCase().replace(" ", "-");
          return (
            <span className={styles.coin_name_symbol}>
              <Image
                src={`https://cryptologos.cc/logos/${parsedCoinName}-${row.asset_id.toLowerCase()}-logo.svg`}
                width={32}
                height={32}
                alt={row.name}
              />
              <div>
                <span>{row.name}</span>
                <span>{row.asset_id}</span>

              </div>
            </span>
          );
        },
      },
      {
        header: "Holdings",
        cell: (txt) => {
          const row = txt.row.original;
          return (
              <div  className={styles.holding}>

                    <span>US$ {formatNumber(Number(row.price_usd))}</span>
                    <h2>{row.amount} {row.asset_id}</h2>
              </div>
          );
        },
      },

      {
        header: "Change",
        cell: (ctx) => (
          <CurrencyChange
            value={Number(ctx.row.original.volume_1hrs_usd)}
            hasPercent
          />
        ),
      },
      {
        header: "Trade",
        cell: (row) => {
          return (
            <Button type="button" design="ghost" onClick={props.onTransferCryptoClick} >
              <Image
                  src="/svgs/transfer.svg"
                  width={16}
                  height={16}
                  alt="transfer crypto"
                />
            </Button>
          );
        },
      },
    ],
    getCoreRowModel: getCoreRowModel(),
  });


  return (
    <table className={styles.tableTrue}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {crypto && table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            <td>
              {row.getVisibleCells().map((cell) => (
                <div key={cell.id} className={styles.row_content}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              ))}
            </td>

          </tr>
        ))}
      </tbody>
    </table>
  );
}
