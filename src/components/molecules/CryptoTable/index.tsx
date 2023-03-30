import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import Image from "next/image";
import { Cryptocoins } from '@/services/cryptocoins';
import styles from './styles.module.scss';
import { formatNumber } from '@/utils/moneyFormat';
import { Button } from '../../atoms/Button';
import { CurrencyChange } from '@/components/atoms/CurrencyChange';



interface Props {
  cryptos: Cryptocoins[]
}

export function CryptoTable(props: Props) {

  const table = useReactTable({
    data: props.cryptos,
    columns: [
      {
				header: "#",
				cell: (change) => <span>{change.row.index >= 9 ? '' : 0 }{change.row.index +1}</span>,

			},
      {
        header: 'Crypto',
        cell: (change) => {
					const row = change.row.original;
          console.log(change.row.original, '/icons/32')

          const replaceHiffen = row && row.id_icon ? row.id_icon.toLowerCase().replace(/-/g, "") : '';
					return (
						<span className={styles.coin_name_symbol}>
							<Image
								src={`https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/${replaceHiffen}.png`}
								width={32}
								height={32}
								alt={row?.name}
							/>
							<div>
								<span>{row?.name}</span>
								<span>{row?.asset_id}</span>
							</div>
						</span>
					);
				},
      },
      {
        header: 'Price',
        cell: (txt) => {
          const row = txt.row.original;
          return (
              <div  className={styles.holding}>
                    <span>US$ {formatNumber(Number(row.price_usd))}</span>
              </div>
          );
        },
      },
      {
        header: 'Change',
        cell: (change) => (
					<CurrencyChange
						value={Number(change.row?.original?.volume_1hrs_usd)}
						hasPercent
					/>
				),
      },
      {
        header: 'Trade',
        cell: (row) => (
          <Button className={styles.btn} type="button" design="primary">
            Buy
          </Button>
        )
      }
    ],
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <>
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
      {props.cryptos && table.getRowModel().rows?.map((row) => (
        <tr key={row?.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>


    </>
  );
}
